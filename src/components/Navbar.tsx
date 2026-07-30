import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Send, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy logic
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = sectionId;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#17223B]/95 backdrop-blur-md shadow-lg border-b border-[#C9A24B]/20 py-3"
          : "bg-[#17223B] border-b border-[#C9A24B]/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          id="nav-logo"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A24B] to-[#A48031] flex items-center justify-center text-[#17223B] font-bold text-lg font-serif shadow-md border border-[#E5C378]/30">
            BH
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif tracking-wide text-base sm:text-lg font-semibold group-hover:text-[#C9A24B] transition-colors">
              Hima Bindhu
            </span>
            <span className="text-[10px] text-[#C9A24B]/80 uppercase tracking-widest font-mono">
              CSE (AI & ML)
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? "text-[#C9A24B] font-semibold bg-[#C9A24B]/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A24B] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#C9A24B]/60 text-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#17223B] text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
          <a
            id="nav-[#contact]-btn"
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#C9A24B] hover:bg-[#E5C378] text-[#17223B] text-xs font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Send className="w-3.5 h-3.5" />
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-resume-icon-btn"
            onClick={onOpenResume}
            className="p-1.5 text-[#C9A24B] border border-[#C9A24B]/40 rounded-md sm:hidden"
            title="Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#17223B] border-b border-[#C9A24B]/30 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#C9A24B]/20 text-[#C9A24B] border-l-4 border-[#C9A24B]"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-700/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#C9A24B] text-[#C9A24B] font-semibold text-sm hover:bg-[#C9A24B] hover:text-[#17223B] transition-colors"
            >
              <FileText className="w-4 h-4" />
              View / Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#C9A24B] text-[#17223B] font-bold text-sm hover:bg-[#E5C378] transition-colors"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
