import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  FileText, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface NavbarProps {
  profile: Profile;
  darkMode: boolean;
  toggleDarkMode: () => void;
  onOpenResume: () => void;
  onOpenPersonalize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  darkMode,
  toggleDarkMode,
  onOpenResume,
  onOpenPersonalize,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // ScrollSpy
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayName = profile.name === '[Your Name]' ? 'DevFolio' : profile.name.split(' ')[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/85 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200/80 shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-slate-100 light:text-slate-900 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-purple-500/20">
              <div className="w-full h-full bg-slate-950 light:bg-white rounded-[10px] flex items-center justify-center overflow-hidden">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={displayName}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <Code2 className="w-5 h-5 text-purple-400 light:text-purple-600 transition-colors" />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 light:from-slate-900 light:via-slate-800 light:to-slate-600 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-400 transition-all">
                {displayName}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-purple-400 light:text-purple-600 -mt-1">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 light:bg-slate-100/80 p-1.5 rounded-full border border-slate-800/80 light:border-slate-200/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-600/30'
                      : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 light:hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Quick Personalize Button */}
            <button
              onClick={onOpenPersonalize}
              title="Personalize your name, bio, and links"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 light:text-slate-700 bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Edit Info</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 light:text-slate-800 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-purple-500/30 hover:border-purple-500/60 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/80 light:hover:bg-slate-200/80 border border-slate-800 light:border-slate-300 transition-colors cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-1 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-md shadow-purple-600/20 hover:shadow-purple-600/40 cursor-pointer flex items-center gap-1"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:bg-slate-800 light:hover:bg-slate-200 transition-colors cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-200 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 light:border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-400 light:bg-purple-50 light:text-purple-700 font-semibold border border-purple-500/30'
                      : 'text-slate-300 light:text-slate-700 hover:bg-slate-900 light:hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-800 light:border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPersonalize();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 light:text-slate-800 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 flex items-center justify-center gap-2 border border-slate-800 light:border-slate-300"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Personalize Portfolio Info</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 light:text-slate-800 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 flex items-center justify-center gap-2 border border-purple-500/30"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View & Print Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 text-center shadow-lg shadow-purple-600/20"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
