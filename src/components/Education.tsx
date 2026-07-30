import React from "react";
import { personalInfo } from "../data/portfolioData";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white text-slate-800 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17223B]/5 border border-[#C9A24B]/30 text-[#17223B] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#C9A24B]" />
            Academic Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#17223B] gold-heading-accent-center pb-3">
            Education
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Formal engineering education focused on Computer Science theory, Artificial Intelligence, and practical software design.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#17223B] to-[#263859] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#C9A24B]/40 relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#C9A24B]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-700/80">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-[#C9A24B] text-[#17223B] shadow-lg shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#C9A24B]/20 text-[#E5C378] text-xs font-semibold font-mono mb-2">
                  {personalInfo.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                  {personalInfo.institution}
                </h3>
                <p className="text-sm text-[#C9A24B] font-medium flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm font-semibold font-mono text-[#E5C378]">
              <Calendar className="w-4 h-4 text-[#C9A24B]" />
              <span>{personalInfo.timeline}</span>
            </div>
          </div>

          {/* Degree & Specialization Details */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-serif font-semibold text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C9A24B]" />
                Degree Program
              </h4>
              <p className="text-base text-slate-200 font-medium">
                {personalInfo.degree}
              </p>
              <p className="text-sm text-[#C9A24B] mt-1 font-semibold">
                Specialization: {personalInfo.specialization}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-serif font-semibold text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C9A24B]" />
                Key Academic Focus & Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Python Programming",
                  "Object-Oriented C++ / C",
                  "SQL & Database Systems",
                  "Artificial Intelligence",
                  "Machine Learning Foundations",
                  "Web Technologies",
                ].map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#C9A24B]" />
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
