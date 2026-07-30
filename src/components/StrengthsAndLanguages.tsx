import React from "react";
import { strengthsAndLanguagesData } from "../data/portfolioData";
import { Zap, Brain, Compass, Languages, Check, Sparkles } from "lucide-react";

export const StrengthsAndLanguages: React.FC = () => {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-6 h-6 text-[#C9A24B]" />;
      case "Brain":
        return <Brain className="w-6 h-6 text-[#C9A24B]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#C9A24B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C9A24B]" />;
    }
  };

  return (
    <section id="strengths" className="py-20 bg-white text-slate-800 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#C9A24B]" />
            Personal Traits & Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            Strengths & Languages
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Core personal strengths and multilingual capabilities for cross-cultural collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Strengths Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#17223B] flex items-center gap-2 border-b border-slate-200 pb-3">
              <Sparkles className="w-5 h-5 text-[#C9A24B]" />
              Core Soft Strengths
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {strengthsAndLanguagesData.strengths.map((item) => (
                <div
                  key={item.name}
                  className="bg-[#F8F9FA] rounded-2xl p-6 border border-slate-200/80 hover:border-[#C9A24B] transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-[#17223B] inline-block mb-4 shadow-sm">
                      {getStrengthIcon(item.icon)}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#17223B] mb-2">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[10px] font-mono font-bold text-[#C9A24B]">
                    <Check className="w-3 h-3 text-[#C9A24B]" /> Verified Trait
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="lg:col-span-5 bg-[#17223B] text-white rounded-3xl p-8 shadow-xl border border-[#C9A24B]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/80">
                <div className="p-3 rounded-xl bg-[#C9A24B] text-[#17223B]">
                  <Languages className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Languages Spoken
                  </h3>
                  <p className="text-xs text-[#C9A24B] font-mono">
                    Multilingual Proficiency
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {strengthsAndLanguagesData.languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-serif font-semibold text-white text-base">
                        {lang.name}
                      </span>
                      <span className="text-xs text-[#E5C378] font-mono">
                        {lang.level}
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-800 p-0.5 border border-slate-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E5C378]"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/80 text-xs text-slate-400 font-light italic">
              Fluent communication across academic, technical, and community environments.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
