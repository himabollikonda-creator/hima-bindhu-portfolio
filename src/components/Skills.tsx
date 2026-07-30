import React, { useState } from "react";
import { skillCategories } from "../data/portfolioData";
import { Code2, Cpu, Layers, CheckCircle, Sparkles, Filter } from "lucide-react";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[#F8F9FA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#C9A24B]" />
            Competencies & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            Technical Skills
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Strong foundation in core computing principles, programming languages, and practical software domains.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat
                  ? "bg-[#17223B] text-[#C9A24B] shadow-md border border-[#C9A24B]/40"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Filter className="w-3.5 h-3.5 text-[#C9A24B]" />
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:border-[#C9A24B]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-[#17223B] text-[#C9A24B]">
                    {cat.iconName === "Code2" && <Code2 className="w-5 h-5" />}
                    {cat.iconName === "Cpu" && <Cpu className="w-5 h-5" />}
                    {cat.iconName === "Layers" && <Layers className="w-5 h-5" />}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#17223B]">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                        <span className="text-[#17223B] font-semibold flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C9A24B]" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#C9A24B] bg-[#17223B]/5 px-2 py-0.5 rounded">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Skill Meter Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden p-0.5 border border-slate-200/60">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#17223B] via-[#263859] to-[#C9A24B] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Tags */}
                      {skill.tags && skill.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-right">
                <span className="text-[11px] font-mono text-slate-400 flex items-center justify-end gap-1">
                  <Sparkles className="w-3 h-3 text-[#C9A24B]" /> Verified Competency
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
