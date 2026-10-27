import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  Sparkles, 
  Code, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Layers,
  ExternalLink
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  onOpenResume: () => void;
  onOpenPersonalize: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onOpenPersonalize }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isPlaceholderName = profile.name === '[Your Name]';

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-50 text-purple-300 dark:text-purple-300 light:text-purple-800 border border-purple-500/30 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3" />
              <span>{profile.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.12]">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                {isPlaceholderName && (
                  <button
                    onClick={onOpenPersonalize}
                    title="Click to replace with your real name"
                    className="ml-2 inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 align-middle hover:bg-purple-500/30 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    Customize
                  </button>
                )}
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 block mt-2">
                Aspiring Web Developer &amp; Digital Creator.
              </span>
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed">
              {profile.shortBio}
            </p>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400 light:text-slate-500 mr-1">
                Core Stack:
              </span>
              {['HTML5 & CSS3', 'JavaScript (ES6+)', 'Responsive UI', 'React', 'Tailwind CSS', 'Figma'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-purple-300 dark:text-purple-300 light:text-purple-800 border border-slate-800 dark:border-slate-800 light:border-slate-300 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-50 border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Verified Indicator */}
            <div className="flex items-center gap-4 pt-4 text-slate-400 light:text-slate-600">
              <span className="text-xs font-medium">Connect:</span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-purple-600/20 border border-slate-800 light:border-slate-300 transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-lg bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-blue-600/20 border border-slate-800 light:border-slate-300 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send direct email"
                className="p-2.5 rounded-lg bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-emerald-600/20 border border-slate-800 light:border-slate-300 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="h-4 w-[1px] bg-slate-800 light:bg-slate-300 mx-1" />

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 light:text-emerald-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Responsive &amp; Production Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Developer Illustration & Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 -z-10 transform scale-95 animate-pulse duration-[6000ms]" />

            {/* Modern Developer Card */}
            <div className="w-full max-w-md rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-6 shadow-2xl backdrop-blur-xl relative group">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 light:text-slate-500 bg-slate-950/60 light:bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-800 light:border-slate-200">
                  <Terminal className="w-3 h-3 text-purple-400" />
                  <span>developer.config.ts</span>
                </div>
              </div>

              {/* Developer Avatar & Visual */}
              <div className="py-6 flex flex-col items-center text-center">
                <div className="relative mb-5">
                  {/* Outer animated gradient ring */}
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 p-[3px] shadow-xl shadow-purple-500/30 group-hover:scale-[1.02] transition-transform">
                    <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-slate-900 rounded-[21px] flex items-center justify-center overflow-hidden relative">
                      
                      {profile.avatarUrl ? (
                        <img 
                          src={profile.avatarUrl} 
                          alt={profile.name} 
                          className="w-full h-full object-cover object-top" 
                        />
                      ) : (
                        /* Stylish Developer SVG Illustration */
                        <svg className="w-24 h-24 text-purple-300" viewBox="0 0 100 100" fill="none">
                          <circle cx="50" cy="50" r="48" fill="url(#avatar-grad)" fillOpacity="0.15" />
                          {/* Developer Head & Glasses */}
                          <circle cx="50" cy="38" r="16" fill="#818CF8" />
                          <rect x="40" y="34" width="8" height="6" rx="2" fill="#0F172A" />
                          <rect x="52" y="34" width="8" height="6" rx="2" fill="#0F172A" />
                          <line x1="48" y1="37" x2="52" y2="37" stroke="#0F172A" strokeWidth="1.5" />
                          {/* Smile */}
                          <path d="M46 44 Q50 48 54 44" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
                          {/* Laptop & Body */}
                          <path d="M26 78 C26 62 36 56 50 56 C64 56 74 62 74 78 Z" fill="#6366F1" />
                          <rect x="34" y="66" width="32" height="18" rx="2" fill="#090D16" stroke="#A855F7" strokeWidth="1.5" />
                          <line x1="38" y1="72" x2="62" y2="72" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="42" y1="76" x2="58" y2="76" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
                          <defs>
                            <linearGradient id="avatar-grad" x1="0" y1="0" x2="100" y2="100">
                              <stop stopColor="#8B5CF6" />
                              <stop offset="1" stopColor="#06B6D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Floating active pill */}
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900 text-emerald-400 border border-emerald-500/40 shadow-lg flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>ONLINE</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                  {profile.name}
                </h3>
                <p className="text-xs text-purple-400 dark:text-purple-400 light:text-purple-600 font-medium mt-0.5">
                  {profile.role}
                </p>

                {/* Micro Code Block Showcase */}
                <div className="w-full mt-4 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-900 rounded-xl p-3 text-left font-mono text-[11px] text-slate-300 border border-slate-800">
                  <div className="text-slate-500">// Developer Highlights</div>
                  <div>
                    <span className="text-purple-400">const</span> developer = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">cleanCode</span>: <span className="text-amber-400">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">responsiveDesign</span>: <span className="text-amber-400">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">passion</span>: <span className="text-emerald-400">'Web Crafts'</span>
                  </div>
                  <div>{'}'};</div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-3 gap-2 w-full mt-4 text-center">
                  <div className="bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-100 p-2 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <div className="text-sm font-bold text-white dark:text-white light:text-slate-900">{profile.completedProjects}</div>
                    <div className="text-[10px] text-slate-400 light:text-slate-500">Projects Built</div>
                  </div>
                  <div className="bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-100 p-2 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <div className="text-sm font-bold text-white dark:text-white light:text-slate-900">100%</div>
                    <div className="text-[10px] text-slate-400 light:text-slate-500">Responsive</div>
                  </div>
                  <div className="bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-100 p-2 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    <div className="text-sm font-bold text-white dark:text-white light:text-slate-900">{profile.yearsExperience}</div>
                    <div className="text-[10px] text-slate-400 light:text-slate-500">Exp. Learning</div>
                  </div>
                </div>

              </div>

              {/* Floating Chips */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 dark:bg-slate-900 light:bg-white text-xs font-semibold text-purple-300 dark:text-purple-300 light:text-purple-700 border border-purple-500/40 shadow-xl backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Pixel-Perfect UI</span>
              </div>

              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 dark:bg-slate-900 light:bg-white text-xs font-semibold text-cyan-300 dark:text-cyan-300 light:text-cyan-700 border border-cyan-500/40 shadow-xl backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fast &amp; Modern</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
