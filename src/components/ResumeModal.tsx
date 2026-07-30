import React, { useState } from "react";
import { personalInfo, certifications, experienceList, hackathonsList, leadershipList, skillCategories } from "../data/portfolioData";
import { X, Printer, Download, Copy, Check, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Briefcase, Award, Trophy, Users, Code2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateTextResume = () => {
    return `
===================================================================
BOLLIKONDA HIMA BINDHU
${personalInfo.title}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
===================================================================

SUMMARY
-------------------------------------------------------------------
${personalInfo.bio}

EDUCATION
-------------------------------------------------------------------
${personalInfo.institution}
${personalInfo.degree} - ${personalInfo.specialization}
${personalInfo.year} | ${personalInfo.timeline}

TECHNICAL SKILLS
-------------------------------------------------------------------
- Languages: Python, C
- Core CS: Data Structures & Algorithms, Object-Oriented Programming, SQL / DBMS
- Domains: Web Development, Cloud Fundamentals, Software Testing, AI/ML Fundamentals

WORK EXPERIENCE
-------------------------------------------------------------------
Web Development Intern — Thiranex (May 2026 – Jun 2026)
- Worked on practical web development projects under senior industry mentorship.
- Built responsive user interfaces and optimized front-end styling.

CERTIFICATIONS & TRAINING
-------------------------------------------------------------------
- Deloitte Technology Job Simulation (Forage) - Apr 2026
- HP LIFE AI for Beginners - Jun 2026
- NASSCOM Cloud Infrastructure Analyst - Jun 2026
- NASSCOM Software Test Engineer - Jun 2026

HACKATHONS & COMPETITIONS
-------------------------------------------------------------------
- HackFluence 2026 (CodeBenders x Dropp) - Team Novahire
- Hackarena 2.0 Zonals (Ignite Room)
- Startup Pitch Arena (Synergy Club, NIT Kurukshetra)
- The Big Brand Theory (E-Cell, IIT BHU)

LEADERSHIP
-------------------------------------------------------------------
Campus Ambassador — Stoxra Student Leadership Program (Jun 2026 – Present)
- Represent Stoxra at SPSU; organize workshops and hackathons for student engagement.

STRENGTHS & LANGUAGES
-------------------------------------------------------------------
Strengths: Quick Learner, Problem-Solving Ability, Adaptability
Languages Spoken: English, Telugu, Hindi
===================================================================
    `.trim();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generateTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#C9A24B]/40 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#17223B] text-white rounded-t-2xl flex items-center justify-between border-b border-[#C9A24B]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A24B] text-[#17223B] font-serif font-bold flex items-center justify-center text-sm">
              BH
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                Curriculum Vitae — Bollikonda Hima Bindhu
              </h3>
              <p className="text-[10px] text-[#C9A24B] font-mono">Verified Resume Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C9A24B] hover:bg-[#E5C378] text-[#17223B] text-xs font-bold transition-colors shadow-sm"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              title="Copy Text Format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Text"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 font-sans text-xs sm:text-sm leading-relaxed">
          
          {/* Document Header */}
          <div className="border-b-2 border-[#17223B] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#17223B] tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-[#C9A24B] mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {personalInfo.institution} • {personalInfo.year}
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* About Summary */}
          <div>
            <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#C9A24B]" /> Executive Summary
            </h2>
            <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#C9A24B]" /> Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-[#17223B] text-sm">{personalInfo.institution}</h3>
                <p className="text-xs font-medium text-slate-700">{personalInfo.degree} ({personalInfo.specialization})</p>
              </div>
              <span className="text-xs font-mono font-semibold text-slate-600">{personalInfo.timeline}</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#C9A24B]" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <strong className="text-[#17223B] block mb-1">Languages:</strong>
                <p className="text-slate-700">Python, C, SQL</p>
              </div>
              <div>
                <strong className="text-[#17223B] block mb-1">Core CS:</strong>
                <p className="text-slate-700">DSA, OOP, DBMS / SQL</p>
              </div>
              <div>
                <strong className="text-[#17223B] block mb-1">Domains:</strong>
                <p className="text-slate-700">Web Dev, Cloud, Software Testing, AI/ML</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#C9A24B]" /> Experience
            </h2>
            {experienceList.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between font-bold text-xs text-[#17223B]">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono text-slate-600">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#C9A24B]" /> Certifications & Virtual Simulations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <span className="font-bold text-[#17223B]">{c.title}</span> — {c.issuer} ({c.date})
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-[#C9A24B]" /> Hackathons & Competitions
            </h2>
            <div className="space-y-1 text-xs">
              {hackathonsList.map((h) => (
                <div key={h.id} className="flex justify-between">
                  <span className="font-semibold text-[#17223B]">{h.event} ({h.organizer})</span>
                  <span className="text-slate-600 font-mono">{h.roleOrTeam || "Participant"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#C9A24B]" /> Leadership
              </h2>
              <p className="text-xs text-slate-700">
                <strong>Campus Ambassador</strong> @ Stoxra Leadership Program (Jun 2026 – Present)
              </p>
            </div>

            <div>
              <h2 className="text-xs font-serif font-bold text-[#17223B] uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
                Languages & Strengths
              </h2>
              <p className="text-xs text-slate-700">
                <strong>Languages:</strong> English, Telugu, Hindi<br />
                <strong>Strengths:</strong> Quick Learner, Problem Solving, Adaptability
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 rounded-b-2xl border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>Bollikonda Hima Bindhu Portfolio Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#17223B] hover:bg-[#263859] text-white font-semibold transition-colors"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
