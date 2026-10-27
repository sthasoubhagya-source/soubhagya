import React from 'react';
import { 
  Code2, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  Sparkles
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
  onOpenResume: () => void;
  onOpenPersonalize: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume, onOpenPersonalize }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-16 pb-12 overflow-hidden text-left">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          
          {/* Col 1: Branding & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 p-[2px] shadow-md shadow-purple-500/20">
                <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-white rounded-[10px] flex items-center justify-center overflow-hidden">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <Code2 className="w-5 h-5 text-purple-400 light:text-purple-600" />
                  )}
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white dark:text-white light:text-slate-900 tracking-tight">
                  {profile.name === '[Your Name]' ? 'DevFolio' : profile.name}
                </span>
                <span className="block text-[11px] font-mono text-purple-400 light:text-purple-600 font-medium">
                  {profile.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              Crafting modern, accessible, and responsive digital web experiences with clean code, elegant typography, and user-centric architecture.
            </p>

            {/* Quick Action Badges */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onOpenPersonalize}
                className="text-[11px] font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-purple-400 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>Personalize Details</span>
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={onOpenResume}
                className="text-[11px] font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-purple-400 cursor-pointer transition-colors"
              >
                Print Resume
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-purple-400 light:hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-3">
                Connect
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 hover:bg-purple-600/30 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 hover:bg-blue-600/30 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send email"
                  className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 hover:bg-emerald-600/30 border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-purple-400 transition-colors cursor-pointer self-start"
            >
              <ArrowUp className="w-4 h-4 text-purple-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>using React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
