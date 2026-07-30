import React from "react";
import { hackathonsList } from "../data/portfolioData";
import { Trophy, Award, Rocket, Lightbulb, Users, Flame } from "lucide-react";

export const Hackathons: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-6 h-6 text-[#C9A24B]" />;
      case "Award":
        return <Award className="w-6 h-6 text-[#C9A24B]" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-[#C9A24B]" />;
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6 text-[#C9A24B]" />;
      default:
        return <Flame className="w-6 h-6 text-[#C9A24B]" />;
    }
  };

  return (
    <section id="hackathons" className="py-20 bg-white text-slate-800 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#C9A24B]" />
            Innovation & Competitions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            Hackathons & Pitch Arenas
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Competitive innovation events driving rapid product building, teamwork, and entrepreneurial problem-solving under pressure.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathonsList.map((hack) => (
            <div
              key={hack.id}
              className="bg-[#17223B] text-white rounded-3xl p-8 shadow-xl border border-[#C9A24B]/30 hover:border-[#C9A24B] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-[#263859] border border-[#C9A24B]/30 group-hover:bg-[#C9A24B] group-hover:text-[#17223B] transition-colors">
                    {getIcon(hack.icon)}
                  </div>
                  {hack.roleOrTeam && (
                    <span className="px-3 py-1 rounded-full bg-[#C9A24B]/20 text-[#E5C378] text-xs font-semibold font-mono border border-[#C9A24B]/40 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {hack.roleOrTeam}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C9A24B] transition-colors mb-1">
                  {hack.event}
                </h3>
                <p className="text-xs text-[#C9A24B] font-mono font-medium mb-4">
                  Organized by {hack.organizer}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {hack.description}
                </p>
              </div>

              {/* Tag Chips */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-wrap gap-2">
                {hack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
