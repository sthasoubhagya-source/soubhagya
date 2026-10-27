import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Smartphone, 
  Layers, 
  Terminal, 
  Palette, 
  Atom, 
  CheckCircle2, 
  Sparkles,
  Cpu,
  Zap,
  Globe
} from 'lucide-react';
import { Skill, SkillCategory } from '../types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'all', label: 'All Core Skills' },
    { key: 'frontend', label: 'Frontend Development' },
    { key: 'responsive', label: 'Responsive Design' },
    { key: 'tools', label: 'Tools & Applications' },
    { key: 'design', label: 'UI/UX Design' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'FileCode':
        return FileCode;
      case 'Smartphone':
        return Smartphone;
      case 'Layers':
        return Layers;
      case 'Terminal':
        return Terminal;
      case 'Palette':
        return Palette;
      case 'Atom':
        return Atom;
      default:
        return Code2;
    }
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Advanced':
        return 'text-emerald-400 light:text-emerald-600 bg-emerald-500/10 border-emerald-500/30';
      case 'Proficient':
        return 'text-purple-400 light:text-purple-600 bg-purple-500/10 border-purple-500/30';
      case 'Skilled':
        return 'text-blue-400 light:text-blue-600 bg-blue-500/10 border-blue-500/30';
      default:
        return 'text-cyan-400 light:text-cyan-600 bg-cyan-500/10 border-cyan-500/30';
    }
  };

  const getProgressColor = (level: number) => {
    if (level >= 90) return 'from-purple-500 via-indigo-500 to-blue-500';
    if (level >= 85) return 'from-indigo-500 via-blue-500 to-cyan-400';
    return 'from-blue-500 via-cyan-400 to-teal-400';
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/50">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400 light:text-blue-600 bg-blue-950/40 light:bg-blue-50 border border-blue-500/30 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Skills &amp; Technical Proficiency
          </h2>
          <p className="mt-3 text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            A comprehensive overview of the modern web technologies, design systems, and developer tools I leverage to build digital solutions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/25 scale-[1.02]'
                      : 'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-300 light:text-slate-700 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = getIcon(skill.icon);
            const profColor = getProficiencyColor(skill.proficiency);
            const progressGradient = getProgressColor(skill.level);

            return (
              <div
                key={skill.id}
                className="group rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-6 shadow-xl hover:shadow-2xl hover:border-purple-500/40 dark:hover:border-purple-500/40 light:hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
              >
                {/* Header: Icon + Title + Level Badge */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-slate-950 to-slate-900 dark:from-slate-950 dark:to-slate-900 light:from-slate-100 light:to-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${profColor}`}>
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-600 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-2 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">Mastery Level</span>
                      <span className="font-bold text-purple-400 dark:text-purple-400 light:text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-950 dark:bg-slate-950 light:bg-slate-200 overflow-hidden p-[1px]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${progressGradient} transition-all duration-1000 group-hover:brightness-110`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Tags Pill List */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Practical Skills Highlights Banner */}
        <div className="mt-14 rounded-2xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                  Standards-Compliant &amp; Production-Minded
                </h4>
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5">
                  Every project adheres to semantic HTML guidelines, WCAG accessibility benchmarks, fluid responsive media, and version-controlled Git practices.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 light:text-emerald-600 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>Responsive Verified</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 light:text-purple-600 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
                <Sparkles className="w-4 h-4" />
                <span>Modern Standards</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
