import React from "react";
import { experienceList } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Code2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white text-slate-800 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#C9A24B]" />
            Practical Industry Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            Work Experience
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Hands-on software development exposure under experienced industry mentorship.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceList.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#17223B] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#C9A24B]/40 relative overflow-hidden transition-all duration-300 hover:border-[#C9A24B]"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#C9A24B] text-[#17223B] shrink-0 font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#C9A24B] font-medium mt-1">
                      <span className="font-semibold text-white">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-300 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-mono font-semibold text-[#E5C378]">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9A24B] mb-4 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" /> Key Contributions & Outcomes
                </h4>

                <ul className="space-y-3 mb-6 text-slate-200 text-sm sm:text-base leading-relaxed">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
