import React from 'react';
import { 
  User, 
  Lightbulb, 
  Code2, 
  Compass, 
  Layers, 
  Target, 
  Sparkles, 
  CheckCircle,
  TrendingUp,
  BrainCircuit,
  HeartHandshake
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
  onOpenPersonalize: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenPersonalize }) => {
  const pillars = [
    {
      icon: Code2,
      title: 'Clean & Semantic Code',
      description: 'Prioritizing structured HTML5, maintainable CSS, and modular JavaScript to make codebases readable, accessible, and scalable.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: Compass,
      title: 'Responsive & Accessible UX',
      description: 'Designing mobile-first architectures that deliver seamless user interactions across all devices, touchscreens, and screen sizes.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: BrainCircuit,
      title: 'Problem-Solving Mindset',
      description: 'Tackling complex development challenges by deconstructing problems into clear algorithmic steps and debugging methodically.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Actively keeping pace with contemporary web trends, modern frontend tooling, design systems, and software engineering practices.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 light:text-purple-600 bg-purple-950/40 light:bg-purple-50 border border-purple-500/30 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Driven by Passion, Focused on Craftsmanship
          </h2>
          <p className="mt-3 text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            Discover my background, what inspires my code, and how I approach digital creation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 p-8 shadow-xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-100">
                <div className="flex items-center gap-3">
                  {profile.avatarUrl && (
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/40 shrink-0 shadow-sm">
                      <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-400 dark:text-purple-400 light:text-purple-600">
                    <Sparkles className="w-4 h-4" />
                    <span>My Journey &amp; Ambitions</span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                  {profile.location}
                </span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
                {profile.fullAbout.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Learning Journey Highlight Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 light:from-purple-50 light:to-indigo-50 border border-purple-500/20 light:border-purple-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      Why Web Development?
                    </h4>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 leading-normal">
                      The web is the world's most accessible canvas. Building products where aesthetic design, responsive engineering, and logic meet to empower everyday users is what excites me every single day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Quick Facts */}
              <div className="mt-6 pt-6 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Specialization</span>
                  <span className="text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">Frontend &amp; Responsive UI</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Status</span>
                  <span className="text-sm font-medium text-emerald-400 light:text-emerald-600">Available to Hire</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Location</span>
                  <span className="text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">Remote / Global</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Pillars & Stats */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
              Core Principles &amp; Work Ethic
            </h3>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 light:hover:border-slate-300 shadow-md group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl border ${pillar.bg} group-hover:scale-105 transition-transform shrink-0`}>
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-700 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-blue-950/40 light:from-purple-50 light:via-slate-50 light:to-blue-50 border border-slate-800/80 light:border-slate-200 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800 light:divide-slate-200">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {profile.completedProjects}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mt-1">
                Completed Projects
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mt-1">
                Hours of Coding
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mt-1">
                Responsive Score
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                3+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mt-1">
                Verified Credentials
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
