import React from "react";
import { personalInfo } from "../data/portfolioData";
import { User, Sparkles, Code2, Brain, Award, GraduationCap, Target, ArrowRight } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8F9FA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-[#C9A24B]" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            About Me
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Passionate CS student bridging foundational software engineering with modern AI & Machine Learning applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#17223B] text-[#C9A24B]">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#17223B]">
                    Personal Overview
                  </h3>
                  <p className="text-xs text-[#C9A24B] font-medium font-mono">
                    2nd Year B.Tech CSE (AI & ML) @ SPSU Udaipur
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                {personalInfo.bio}
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#17223B]/5 border border-[#17223B]/10 text-[#17223B] text-xs font-semibold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#C9A24B]" /> Quick Learner
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#17223B]/5 border border-[#17223B]/10 text-[#17223B] text-xs font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#C9A24B]" /> Web & Cloud
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#17223B]/5 border border-[#17223B]/10 text-[#17223B] text-xs font-semibold flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#C9A24B]" /> AI/ML Fundamentals
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#17223B]/5 border border-[#17223B]/10 text-[#17223B] text-xs font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C9A24B]" /> Community Leader
              </span>
            </div>
          </div>

          {/* Side Highlights & Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-[#17223B] text-white rounded-2xl p-6 border-t-4 border-[#C9A24B] shadow-sm flex flex-col justify-between">
              <div>
                <GraduationCap className="w-7 h-7 text-[#C9A24B] mb-3" />
                <h4 className="font-serif text-2xl font-bold text-white mb-1">2025–2029</h4>
                <p className="text-xs text-[#C9A24B] font-medium font-mono uppercase tracking-wider">
                  Current Degree
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-300 leading-normal">
                B.Tech in CS (AI & ML) at Sir Padampat Singhania University, Udaipur.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <Sparkles className="w-7 h-7 text-[#C9A24B] mb-3" />
                <h4 className="font-serif text-2xl font-bold text-[#17223B] mb-1">4+ Events</h4>
                <p className="text-xs text-[#C9A24B] font-semibold font-mono uppercase tracking-wider">
                  Hackathons & Pitches
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-600 leading-normal">
                HackFluence 2026, Hackarena 2.0, Startup Pitch Arena (NIT Kurukshetra), E-Cell IIT BHU.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <Award className="w-7 h-7 text-[#C9A24B] mb-3" />
                <h4 className="font-serif text-2xl font-bold text-[#17223B] mb-1">2+ Simulations</h4>
                <p className="text-xs text-[#C9A24B] font-semibold font-mono uppercase tracking-wider">
                  Industry Industry Credentials
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-600 leading-normal">
                Deloitte Tech Simulation, HP LIFE AI, NASSCOM Cloud & Software Testing.
              </p>
            </div>

            <div className="bg-[#17223B] text-white rounded-2xl p-6 border-t-4 border-[#C9A24B] shadow-sm flex flex-col justify-between">
              <div>
                <User className="w-7 h-7 text-[#C9A24B] mb-3" />
                <h4 className="font-serif text-2xl font-bold text-white mb-1">Campus Lead</h4>
                <p className="text-xs text-[#C9A24B] font-medium font-mono uppercase tracking-wider">
                  Stoxra Leadership
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-300 leading-normal">
                Campus Ambassador connecting students to workshops, hackathons, and career paths.
              </p>
            </div>

          </div>

        </div>

        {/* Quick CTA banner */}
        <div className="mt-12 bg-gradient-to-r from-[#17223B] to-[#263859] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C9A24B]/30">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#C9A24B]/20 border border-[#C9A24B] items-center justify-center text-[#C9A24B]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Interested in collaborating or offering an internship?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                I am eager to contribute to web engineering, AI/ML initiatives, and software projects.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#C9A24B] hover:bg-[#E5C378] text-[#17223B] font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-colors shadow-md"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
