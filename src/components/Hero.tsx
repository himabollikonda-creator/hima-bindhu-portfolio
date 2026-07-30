import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  FileText,
  Send,
  Sparkles,
  MapPin,
  GraduationCap,
  Copy,
  Check,
  ExternalLink,
  ChevronDown
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 bg-[#17223B] text-white flex items-center overflow-hidden"
    >
      {/* Background Decorative Gold Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none animate-gold-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E5C378]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/30 text-[#E5C378] text-xs font-medium self-center lg:self-start shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24B] animate-spin-slow" />
              <span>Seeking AI/ML & Web Development Opportunities</span>
            </div>

            {/* Main Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              {personalInfo.name}
            </h1>

            {/* Subtitle Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-semibold text-[#C9A24B]">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#C9A24B]" />
                {personalInfo.title}
              </span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-300 text-xs sm:text-sm font-normal">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                SPSU, Udaipur
              </span>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed italic border-l-2 border-[#C9A24B]/60 pl-4 py-1 mx-auto lg:mx-0">
              "{personalInfo.tagline}"
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A24B] hover:bg-[#E5C378] text-[#17223B] font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </button>

              <a
                id="hero-[#contact]-btn"
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm border border-[#C9A24B]/40 hover:border-[#C9A24B] shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Send className="w-4 h-4 text-[#C9A24B]" />
                Contact Me
              </a>
            </div>

            {/* Social Links & Quick Actions */}
            <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-[#C9A24B]" />
                <span className="hidden sm:inline">{personalInfo.email}</span>
                <span className="sm:hidden">Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-[#C9A24B] transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Call Phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{personalInfo.phone}</span>
              </a>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#C9A24B] text-slate-300 hover:text-[#17223B] transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#C9A24B] text-slate-300 hover:text-[#17223B] transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Circular Profile Photo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group cursor-pointer" onClick={() => setShowImageModal(true)}>
              {/* Outer Glowing Gold Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C9A24B] via-[#E5C378] to-[#A48031] rounded-full blur-md opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse" />
              
              {/* Image Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-[#17223B] border-2 border-[#C9A24B]/80 shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay view hint */}
                <div className="absolute inset-0 rounded-full bg-[#17223B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-xs text-white font-medium gap-1">
                  <ExternalLink className="w-5 h-5 text-[#C9A24B]" />
                  <span>View Portrait</span>
                </div>
              </div>

              {/* Decorative Badge Overlay */}
              <div className="absolute -bottom-2 -right-2 bg-[#17223B] border border-[#C9A24B] px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-serif font-semibold text-[#E5C378]">B.Tech CSE 2nd Yr</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400 italic font-light">
              Bollikonda Hima Bindhu • SPSU
            </p>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-slate-400 hover:text-[#C9A24B] transition-colors text-xs gap-1 group"
          >
            <span>Explore Portfolio</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#C9A24B]" />
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowImageModal(false)}>
          <div className="relative max-w-md w-full bg-[#17223B] border-2 border-[#C9A24B] rounded-2xl p-6 text-center text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              ✕
            </button>
            <h3 className="font-serif text-xl font-bold text-[#C9A24B] mb-2">{personalInfo.name}</h3>
            <p className="text-xs text-slate-300 mb-4">{personalInfo.title}</p>
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-[#C9A24B] mb-4">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sir Padampat Singhania University (SPSU), Udaipur
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
