import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required fields.",
      });
    }

    const targetEmail = "himabollikonda@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;
    let emailSentDirectly = false;
    let resendError: string | null = null;

    // 1. Attempt Resend delivery if key is available
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const emailResult = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: targetEmail,
          replyTo: email,
          subject: `New Portfolio Inquiry from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #17223b; border-bottom: 2px solid #c9a24b; padding-bottom: 10px; margin-top: 0;">
                New Portfolio Contact Inquiry
              </h2>
              <p style="color: #475569; font-size: 14px;">
                You received a new contact message through your portfolio website from <strong>${name}</strong>.
              </p>
              <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0; border-left: 4px solid #c9a24b;">
                <p style="margin: 4px 0; font-size: 14px; color: #334155;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 4px 0; font-size: 14px; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 4px 0; font-size: 14px; color: #334155;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
                <p style="margin: 4px 0; font-size: 14px; color: #334155;"><strong>Time:</strong> ${new Date().toLocaleString("en-IN")}</p>
              </div>
              <div style="margin-top: 20px;">
                <h3 style="color: #17223b; font-size: 16px; margin-bottom: 8px;">Message:</h3>
                <div style="padding: 16px; background-color: #f1f5f9; border-radius: 08px; color: #0f172a; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${message}</div>
              </div>
              <div style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
                Sent from Bollikonda Hima Bindhu Portfolio • <a href="mailto:${email}" style="color: #3b82f6;">Click to Reply to Sender</a>
              </div>
            </div>
          `,
        });

        if (emailResult.data) {
          emailSentDirectly = true;
        } else if (emailResult.error) {
          resendError = emailResult.error.message;
        }
      } catch (err: any) {
        resendError = err?.message || "Failed to deliver via Resend API";
      }
    }

    // 2. Fallback to FormSubmit AJAX dispatch if Resend was not used or failed
    if (!emailSentDirectly) {
      try {
        const fsResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone: phone || "Not provided",
            message,
            _subject: `New Portfolio Message from ${name}`,
            _replyto: email,
            _template: "table",
          }),
        });

        if (fsResponse.ok) {
          emailSentDirectly = true;
        }
      } catch (fsErr) {
        console.error("FormSubmit server fallback error:", fsErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: emailSentDirectly
        ? `Your message has been sent directly to ${targetEmail}!`
        : `Message received and saved!`,
      contactRecord: {
        id: `msg_${Date.now()}`,
        name,
        email,
        phone: phone || "",
        message,
        timestamp: new Date().toISOString(),
        emailSentDirectly,
      },
      targetEmail,
      emailSentDirectly,
      resendConfigured: !!resendApiKey,
      resendError,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: "Server error handling contact request.",
    });
  }
}
