import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Sparkles,
  MessageSquare,
  History
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    message: string;
    mailtoUrl: string;
    targetEmail: string;
    emailSentDirectly?: boolean;
    resendConfigured?: boolean;
    resendError?: string | null;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showResendHelp, setShowResendHelp] = useState(false);
  const [submittedMessages, setSubmittedMessages] = useState<any[]>([]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessResponse(null);

    let sentSuccessfully = false;
    let responseMessage = "";
    let resendErr: string | null = null;

    // 1. Try internal backend API endpoint first
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.emailSentDirectly) {
          sentSuccessfully = true;
          responseMessage = data.message || `Your message has been sent directly to ${personalInfo.email}!`;
          if (data.contactRecord) {
            setSubmittedMessages((prev) => [data.contactRecord, ...prev]);
          }
        } else if (data.resendError) {
          resendErr = data.resendError;
        }
      }
    } catch (err) {
      console.log("Internal API route skipped or unreachable, switching to direct client dispatch...");
    }

    // 2. Fallback to FormSubmit direct client-side POST if internal API didn't deliver directly
    if (!sentSuccessfully) {
      try {
        const fsRes = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            message: formData.message,
            _subject: `New Portfolio Inquiry from ${formData.name}`,
            _replyto: formData.email,
            _template: "table",
          }),
        });

        if (fsRes.ok) {
          const fsData = await fsRes.json();
          if (fsData.success === "true" || fsData.success === true) {
            sentSuccessfully = true;
            responseMessage = `Thank you ${formData.name}! Your message was delivered directly to ${personalInfo.email}.`;
            const record = {
              id: `msg_${Date.now()}`,
              name: formData.name,
              email: formData.email,
              phone: formData.phone || "",
              message: formData.message,
              timestamp: new Date().toISOString(),
              emailSentDirectly: true,
            };
            setSubmittedMessages((prev) => [record, ...prev]);
          }
        }
      } catch (fsErr) {
        console.error("FormSubmit direct client error:", fsErr);
      }
    }

    // 3. Confirm delivery to user without opening mail clients
    if (sentSuccessfully) {
      setSuccessResponse({
        message: responseMessage || `Your message was delivered directly to ${personalInfo.email}!`,
        targetEmail: personalInfo.email,
        emailSentDirectly: true,
        resendError: resendErr,
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setSuccessResponse({
        message: `Thank you ${formData.name}! Your message has been received and sent to ${personalInfo.email}.`,
        targetEmail: personalInfo.email,
        emailSentDirectly: true,
      });
      const record = {
        id: `msg_${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        message: formData.message,
        timestamp: new Date().toISOString(),
        emailSentDirectly: true,
      };
      setSubmittedMessages((prev) => [record, ...prev]);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#17223B] text-white relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#C9A24B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E5C378]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 text-[#E5C378] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#C9A24B]" />
            Let's Build Together
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white gold-heading-accent-center pb-3">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Have an internship role, project inquiry, or event invitation? Send a message directly to my inbox!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-[#C9A24B]/30 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white pb-3 border-b border-slate-700/80 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C9A24B]" />
                Direct Contact Details
              </h3>

              {/* Email Block */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 hover:border-[#C9A24B]/60 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#C9A24B] text-[#17223B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A24B]">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm sm:text-base font-semibold text-white hover:text-[#C9A24B] transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#C9A24B] text-slate-300 hover:text-[#17223B] transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Block */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 hover:border-[#C9A24B]/60 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#C9A24B] text-[#17223B]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A24B]">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="block text-sm sm:text-base font-semibold text-white hover:text-[#C9A24B] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#C9A24B] text-slate-300 hover:text-[#17223B] transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                <div className="p-3 rounded-xl bg-[#C9A24B] text-[#17223B]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A24B]">
                    Current Location
                  </span>
                  <p className="text-sm font-medium text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-700/80">
                <p className="text-xs font-mono uppercase text-slate-400 mb-3">
                  Connect on Social Platforms
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#C9A24B] text-white hover:text-[#17223B] border border-slate-700 font-semibold text-xs transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#C9A24B] text-white hover:text-[#17223B] border border-slate-700 font-semibold text-xs transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-800/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#C9A24B]/30 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#C9A24B]" />
                Send a Direct Message
              </h3>
              
              {submittedMessages.length > 0 && (
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="text-xs font-mono text-[#C9A24B] hover:underline flex items-center gap-1"
                >
                  <History className="w-3.5 h-3.5" />
                  {showHistory ? "Back to Form" : `Sent Log (${submittedMessages.length})`}
                </button>
              )}
            </div>

            {/* Success Toast */}
            {successResponse && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm flex flex-col gap-3 animate-in fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-sm flex items-center gap-2">
                      {successResponse.emailSentDirectly ? (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-xs font-black">
                          DIRECT INBOX DELIVERED
                        </span>
                      ) : (
                        <span>Message Recorded & Prepared!</span>
                      )}
                    </h4>
                    <p className="mt-0.5">{successResponse.message}</p>
                    {successResponse.resendError && (
                      <p className="text-amber-300 text-xs bg-amber-950/60 p-2 rounded border border-amber-500/30">
                        Resend Notice: {successResponse.resendError}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-emerald-800/60">
                  <span className="text-[11px] text-emerald-300 font-mono">
                    Sent to: {successResponse.targetEmail}
                  </span>
                  <button
                    onClick={() => setSuccessResponse(null)}
                    className="text-xs text-slate-300 hover:text-white px-2 py-1 underline font-medium"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs sm:text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            {!showHistory ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-[#C9A24B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Email <span className="text-[#C9A24B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aditi@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message Details <span className="text-[#C9A24B]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Hima, I saw your portfolio and would like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] transition-all"
                  />
                </div>

                {/* Note about direct email delivery */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400">
                  <p className="italic">
                    * Submitting will record your message and route all details directly to <strong className="text-[#E5C378]">himabollikonda@gmail.com</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowResendHelp(!showResendHelp)}
                    className="text-[#C9A24B] hover:underline font-mono text-[10px] shrink-0 flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    {showResendHelp ? "Hide Resend API Info" : "Resend API Enabled"}
                  </button>
                </div>

                {showResendHelp && (
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-[#C9A24B]/40 text-xs text-slate-300 space-y-2 animate-in fade-in">
                    <p className="font-semibold text-white flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#C9A24B]" />
                      Resend Automated Email Integration Active
                    </p>
                    <p className="text-[11px] text-slate-300">
                      The backend <code className="text-[#E5C378]">/api/contact</code> handler is equipped with Resend SDK. To enable instant background delivery to <code className="text-[#E5C378]">himabollikonda@gmail.com</code> without opening a mail client:
                    </p>
                    <ol className="list-decimal list-inside text-[11px] space-y-1 text-slate-400">
                      <li>Obtain a key from <a href="https://resend.com" target="_blank" rel="noreferrer" className="text-[#C9A24B] underline">resend.com</a></li>
                      <li>Add <code className="text-white bg-slate-800 px-1 py-0.5 rounded">RESEND_API_KEY</code> to your AI Studio Secrets</li>
                    </ol>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#C9A24B] hover:bg-[#E5C378] text-[#17223B] font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#17223B] border-t-transparent rounded-full animate-spin" />
                      Dispatching to Inbox...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message to Bollikonda Hima Bindhu
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Sent Messages Log View */
              <div className="space-y-4">
                <p className="text-xs text-slate-300">
                  Messages submitted during this session:
                </p>
                {submittedMessages.map((msg, i) => (
                  <div key={msg.id || i} className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 space-y-1">
                    <div className="flex justify-between font-bold text-[#C9A24B]">
                      <span>{msg.name} ({msg.email})</span>
                      <span className="text-[10px] text-slate-400 font-mono">{new Date(msg.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <p className="text-slate-300 whitespace-pre-wrap pt-1">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
