import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Award,
  BookOpen
} from 'lucide-react';
import { Profile, Skill, Project, EducationItem, Certification } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  skills,
  projects,
  education,
  certifications,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      {/* Container */}
      <div className="relative bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-6 sm:p-10 text-left">
        
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print flex items-center justify-between pb-6 mb-6 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
            <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
              Curriculum Vitae / Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all flex items-center gap-2 shadow-md shadow-purple-600/30 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="space-y-8 bg-slate-950/40 dark:bg-slate-950/40 light:bg-white p-6 sm:p-8 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
                {profile.name}
              </h1>
              <p className="text-sm font-semibold text-purple-400 dark:text-purple-400 light:text-purple-600 mt-1">
                {profile.role}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  {profile.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  {profile.githubUrl.replace('https://', '')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                  {profile.linkedinUrl.replace('https://', '')}
                </span>
              </div>
            </div>

            {profile.avatarUrl && (
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-500/40 shrink-0 shadow-md">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {profile.shortBio} {profile.fullAbout[0]}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-3">
              Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white dark:text-white light:text-slate-900">Languages &amp; Markup:</span>{' '}
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">HTML5, CSS3, JavaScript (ES6+), TypeScript</span>
              </div>
              <div>
                <span className="font-semibold text-white dark:text-white light:text-slate-900">Frameworks &amp; Styling:</span>{' '}
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">React, Tailwind CSS, Responsive Design, Flexbox, Grid</span>
              </div>
              <div>
                <span className="font-semibold text-white dark:text-white light:text-slate-900">Tools &amp; Platforms:</span>{' '}
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Git, GitHub, VS Code, Chrome DevTools, Website Builders (WordPress, Webflow)</span>
              </div>
              <div>
                <span className="font-semibold text-white dark:text-white light:text-slate-900">Design &amp; Practices:</span>{' '}
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Figma, UI/UX Wireframing, Web Accessibility (WCAG), Clean Architecture</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex items-center justify-between font-bold text-white dark:text-white light:text-slate-900">
                    <span>{proj.title}</span>
                    <span className="font-mono text-[10px] text-purple-400 light:text-purple-600">{proj.categoryLabel}</span>
                  </div>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">{proj.shortDescription}</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-800 light:border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-3">
              Education &amp; Training
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex items-center justify-between font-semibold text-white dark:text-white light:text-slate-900">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-[10px] text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-slate-400 light:text-slate-600 text-[11px]">{edu.institution} — {edu.location}</div>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 mt-0.5">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 dark:text-purple-400 light:text-purple-600 mb-2">
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-start gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>{c.title}</strong> — {c.issuer} ({c.issueDate})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
