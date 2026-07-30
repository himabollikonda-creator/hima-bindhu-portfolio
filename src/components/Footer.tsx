import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ChevronUp, Mail, Linkedin, Github, Heart, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-12 border-t-2 border-[#C9A24B]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A24B] to-[#A48031] flex items-center justify-center text-[#17223B] font-bold text-lg font-serif">
                BH
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {personalInfo.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
              {personalInfo.title} at Sir Padampat Singhania University (SPSU), Udaipur.
              Turning curiosity into code across AI, Web Engineering, and Cloud.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C9A24B] font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for internships & collaborative projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C9A24B] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-[#C9A24B] transition-colors">About Me</a></li>
              <li><a href="#education" className="hover:text-[#C9A24B] transition-colors">Education</a></li>
              <li><a href="#skills" className="hover:text-[#C9A24B] transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-[#C9A24B] transition-colors">Work Experience</a></li>
              <li><a href="#certifications" className="hover:text-[#C9A24B] transition-colors">Certifications</a></li>
              <li><a href="#hackathons" className="hover:text-[#C9A24B] transition-colors">Hackathons</a></li>
              <li><a href="#leadership" className="hover:text-[#C9A24B] transition-colors">Leadership</a></li>
              <li><a href="#contact" className="hover:text-[#C9A24B] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C9A24B] uppercase tracking-wider">
              Connect Directly
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-slate-300">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-[#C9A24B] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A24B] flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>LinkedIn Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A24B] flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#C9A24B] text-slate-300 hover:text-[#17223B] transition-all duration-200 border border-slate-700"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
