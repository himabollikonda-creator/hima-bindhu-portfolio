import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  timestamp: string;
  emailSentDirectly?: boolean;
}

const contactMessages: ContactMessage[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      app: "Bollikonda Hima Bindhu Portfolio",
      resendConfigured: !!process.env.RESEND_API_KEY,
    });
  });

  // Contact API handler with direct Resend integration
  app.post("/api/contact", async (req, res) => {
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

      // Attempt direct email dispatch via Resend API if key is provided
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
                  <div style="padding: 16px; background-color: #f1f5f9; border-radius: 8px; color: #0f172a; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${message}</div>
                </div>
                <div style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
                  Sent from Bollikonda Hima Bindhu Portfolio • <a href="mailto:${email}" style="color: #3b82f6;">Click to Reply to Sender</a>
                </div>
              </div>
            `,
          });

          if (emailResult.data) {
            console.log(`[RESEND SUCCESS] Email dispatched to ${targetEmail}, ID: ${emailResult.data.id}`);
            emailSentDirectly = true;
          } else if (emailResult.error) {
            console.error("[RESEND API ERROR]", emailResult.error);
            resendError = emailResult.error.message;
          }
        } catch (err: any) {
          console.error("[RESEND EXCEPTION]", err);
          resendError = err?.message || "Failed to deliver via Resend API";
        }
      }

      // Fallback to FormSubmit if Resend was not used or failed
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
            console.log(`[FORMSUBMIT SUCCESS] Email dispatched to ${targetEmail}`);
            emailSentDirectly = true;
          }
        } catch (fsErr) {
          console.error("FormSubmit server error:", fsErr);
        }
      }

      const newMessage: ContactMessage = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name,
        email,
        phone: phone || "",
        message,
        timestamp: new Date().toISOString(),
        emailSentDirectly,
      };

      contactMessages.unshift(newMessage);

      return res.json({
        success: true,
        message: emailSentDirectly
          ? `Your message has been sent directly to ${targetEmail}!`
          : `Message received and recorded!`,
        contactRecord: newMessage,
        targetEmail,
        emailSentDirectly,
        resendConfigured: !!resendApiKey,
        resendError,
      });
    } catch (err: any) {
      console.error("Error processing contact message:", err);
      return res.status(500).json({
        success: false,
        error: "Server error handling contact request.",
      });
    }
  });

  // API route to get received contact messages (for review)
  app.get("/api/contact/messages", (_req, res) => {
    res.json({ success: true, count: contactMessages.length, messages: contactMessages });
  });

  // Vite middleware for development vs Static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
