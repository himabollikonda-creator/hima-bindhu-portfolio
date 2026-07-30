import React from "react";
import { leadershipList } from "../data/portfolioData";
import { Users, Calendar, CheckCircle2, Sparkles, Building2, Megaphone } from "lucide-react";

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-[#F8F9FA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#C9A24B]" />
            Community & Mentorship
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            Leadership & Campus Engagement
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Empowering fellow students, hosting tech workshops, and driving student innovation on campus.
          </p>
        </div>

        {/* Leadership Content Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          {leadershipList.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200/90 relative overflow-hidden transition-all duration-300 hover:border-[#C9A24B]"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#17223B] text-[#C9A24B] shrink-0">
                    <Megaphone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#17223B]">
                      {lead.role}
                    </h3>
                    <p className="text-sm text-[#C9A24B] font-semibold flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-[#C9A24B]" />
                      {lead.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#17223B]/5 border border-[#17223B]/10 text-xs font-mono font-bold text-[#17223B]">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>{lead.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9A24B] font-bold mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Core Initiatives & Impact
                </h4>

                <ul className="space-y-3 mb-6 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {lead.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {lead.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-[#17223B] text-[#E5C378] text-xs font-medium"
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
