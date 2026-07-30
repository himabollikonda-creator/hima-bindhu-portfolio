import React from "react";
import { certifications } from "../data/portfolioData";
import { Award, Calendar, CheckCircle2, Briefcase, Sparkles, Cloud, ExternalLink } from "lucide-react";

export const Certifications: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#C9A24B]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#C9A24B]" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-[#C9A24B]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#C9A24B]" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-[#F8F9FA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#C9A24B]" />
            Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            Certifications & Training
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Verified virtual job simulations and accredited industry training across AI, Cloud, and Software Quality Assurance.
          </p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:border-[#C9A24B] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#17223B] group-hover:bg-[#C9A24B] transition-colors duration-300 group-hover:text-[#17223B]">
                      {getCertIcon(cert.icon)}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#17223B] group-hover:text-[#C9A24B] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {cert.issuer} {cert.platform ? `(${cert.platform})` : ""}
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#17223B]/5 text-[#17223B] shrink-0">
                    <Calendar className="w-3 h-3 text-[#C9A24B]" />
                    {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#C9A24B] group-hover:underline">
                  <span>Verified Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
