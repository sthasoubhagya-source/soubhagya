import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { EducationItem, Certification } from '../types/portfolio';

interface EducationProps {
  education: EducationItem[];
  certifications: Certification[];
}

export const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 light:text-purple-600 bg-purple-950/40 light:bg-purple-50 border border-purple-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            My academic foundations, technical bootcamps, and specialized web development certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Educational Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Academic Background</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-200 ml-3 pl-6">
              {education.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 dark:bg-slate-950 light:bg-white border-2 border-purple-500 group-hover:scale-125 transition-transform" />

                  <div className="rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-6 shadow-xl hover:border-purple-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 light:text-purple-600 font-semibold bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </span>

                      {item.gradeOrHonor && (
                        <span className="text-xs font-medium text-emerald-400 light:text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          {item.gradeOrHonor}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-600 transition-colors">
                      {item.degree}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1">
                      <span className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">{item.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Topics Studied */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 block mb-2">
                        Key Subjects &amp; Practical Areas:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {item.keyLearnings.map((learn, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span>{learn}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Continuous Learning */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Certifications &amp; Badges</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-5 shadow-lg hover:border-blue-500/30 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-blue-400 light:text-blue-600 font-semibold block">
                        {cert.issuer} • {cert.issueDate}
                      </span>
                      <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-300 dark:group-hover:text-blue-300 light:group-hover:text-blue-600 transition-colors mt-0.5">
                        {cert.title}
                      </h4>
                    </div>

                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-2 text-[10px] font-mono text-slate-400 light:text-slate-500">
                      ID: <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">{cert.credentialId}</span>
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Learning Callout Card */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-slate-900/90 light:from-purple-50 light:to-indigo-50 border border-purple-500/30 light:border-purple-200 p-6 shadow-xl text-left">
              <div className="flex items-center gap-2 text-sm font-bold text-purple-300 light:text-purple-700 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Self-Taught &amp; Project Driven</span>
              </div>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                Supplemented by 500+ hours of independent coding, online documentation deep dives (MDN Web Docs, React Docs, Tailwind CSS), and building hands-on portfolio projects from scratch.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
