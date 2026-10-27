import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Eye, 
  Layers, 
  Sparkles, 
  Code, 
  CheckCircle2, 
  Monitor, 
  Smartphone, 
  Maximize2,
  X,
  Plus
} from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
  onOpenPersonalize: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onOpenPersonalize }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Applications' },
    { key: 'responsive', label: 'Responsive Sites' },
    { key: 'design', label: 'UI/UX Prototypes' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Render stylized interactive mockup based on mockupType
  const renderCardMockup = (project: Project) => {
    return (
      <div className={`w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br ${project.gradient} p-3.5 border border-slate-800 dark:border-slate-800 light:border-slate-200 relative overflow-hidden group-hover:border-purple-500/40 transition-colors`}>
        {/* Mockup Top Browser Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-[10px] text-slate-300 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="bg-slate-950/40 px-2 py-0.5 rounded text-[10px] text-slate-300 truncate max-w-[140px]">
            {project.id.replace('project-', '')}.dev
          </span>
          <span className="text-[10px] text-purple-300 font-semibold uppercase">{project.categoryLabel}</span>
        </div>

        {/* Visual Mockup Content */}
        <div className="pt-3 h-[calc(100%-28px)] flex flex-col justify-between">
          {project.mockupType === 'dashboard' && (
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="w-1/3 h-12 rounded-lg bg-slate-950/60 p-2 border border-white/10 flex flex-col justify-between">
                  <div className="w-8 h-2 rounded bg-purple-400/60" />
                  <div className="w-12 h-3 rounded bg-purple-400 font-mono text-[9px] text-white font-bold">12 Active</div>
                </div>
                <div className="w-1/3 h-12 rounded-lg bg-slate-950/60 p-2 border border-white/10 flex flex-col justify-between">
                  <div className="w-8 h-2 rounded bg-cyan-400/60" />
                  <div className="w-10 h-3 rounded bg-cyan-400 font-mono text-[9px] text-white font-bold">98% Done</div>
                </div>
                <div className="w-1/3 h-12 rounded-lg bg-slate-950/60 p-2 border border-white/10 flex flex-col justify-between">
                  <div className="w-8 h-2 rounded bg-emerald-400/60" />
                  <div className="w-10 h-3 rounded bg-emerald-400 font-mono text-[9px] text-white font-bold">4.9 Star</div>
                </div>
              </div>
              <div className="w-full h-14 rounded-lg bg-slate-950/70 border border-white/10 p-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-500/30 flex items-center justify-center text-[10px] text-purple-300 font-bold">✓</div>
                <div className="space-y-1 flex-1">
                  <div className="w-3/4 h-2 rounded bg-slate-400/50" />
                  <div className="w-1/2 h-1.5 rounded bg-slate-500/50" />
                </div>
              </div>
            </div>
          )}

          {project.mockupType === 'browser' && (
            <div className="space-y-2.5">
              <div className="w-full h-16 rounded-xl bg-slate-950/70 border border-white/10 p-3 flex items-center justify-between">
                <div className="space-y-1.5">
                  <div className="w-28 h-3 rounded-md bg-gradient-to-r from-blue-400 to-indigo-400" />
                  <div className="w-40 h-2 rounded bg-slate-400/40" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 text-xs font-bold">
                  ★
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 rounded-lg bg-slate-950/60 border border-white/10 p-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-indigo-500/30" />
                  <div className="w-16 h-2 rounded bg-slate-400/60" />
                </div>
                <div className="h-10 rounded-lg bg-slate-950/60 border border-white/10 p-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-purple-500/30" />
                  <div className="w-16 h-2 rounded bg-slate-400/60" />
                </div>
              </div>
            </div>
          )}

          {project.mockupType === 'mobile' && (
            <div className="flex items-center justify-center h-full">
              <div className="w-48 h-32 rounded-xl bg-slate-950/80 border border-cyan-500/30 p-2.5 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center text-[9px] text-cyan-300 font-mono">
                  <span>Forecast • Live</span>
                  <span>72°F Sunny</span>
                </div>
                <div className="flex justify-around items-end h-14 pt-2">
                  <div className="w-6 h-10 bg-cyan-500/40 rounded-t-sm flex items-center justify-center text-[8px] text-cyan-200">Mon</div>
                  <div className="w-6 h-12 bg-cyan-400/60 rounded-t-sm flex items-center justify-center text-[8px] text-cyan-200">Tue</div>
                  <div className="w-6 h-14 bg-cyan-300/80 rounded-t-sm flex items-center justify-center text-[8px] text-slate-950 font-bold">Wed</div>
                  <div className="w-6 h-8 bg-cyan-500/40 rounded-t-sm flex items-center justify-center text-[8px] text-cyan-200">Thu</div>
                </div>
              </div>
            </div>
          )}

          {project.mockupType === 'code' && (
            <div className="h-full rounded-lg bg-slate-950/90 border border-white/10 p-2.5 font-mono text-[10px] text-slate-300 flex flex-col justify-around">
              <div><span className="text-purple-400">function</span> <span className="text-cyan-300">highlightCode</span>() {'{'}</div>
              <div className="pl-3 text-emerald-400">const snippet = format();</div>
              <div className="pl-3 text-amber-300">return copyToClipboard(snippet);</div>
              <div>{'}'}</div>
            </div>
          )}

          {/* Bottom Hover Overlay Action */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center gap-3">
            <button
              onClick={() => setSelectedProject(project)}
              className="px-3.5 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-purple-600/40 hover:bg-purple-500 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Details</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 light:text-purple-600 bg-purple-950/40 light:bg-purple-50 border border-purple-500/30 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Projects &amp; Creations
          </h2>
          <p className="mt-3 text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
            A showcase of web applications, responsive websites, and user interfaces crafted with clean code, modern frameworks, and responsive design.
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-5 shadow-xl hover:shadow-2xl hover:border-purple-500/40 dark:hover:border-purple-500/40 light:hover:border-purple-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Visual Screenshot / Interactive Mockup */}
                {renderCardMockup(project)}

                {/* Title & Description */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 light:text-purple-600 font-semibold">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-950/40 border border-slate-800">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-purple-600/30 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="View GitHub Repository"
                    className="p-2 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Open Live Preview"
                    className="p-2 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for Customizing Projects */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-blue-950/30 border border-slate-800 dark:border-slate-800 light:border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                Placeholder Projects Ready for Your Real Work
              </h4>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5">
                These projects serve as production-ready templates until you replace them with your custom links and descriptions.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPersonalize}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 light:text-slate-800 bg-slate-800/80 light:bg-white hover:bg-slate-700 light:hover:bg-slate-100 border border-slate-700 light:border-slate-300 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-purple-400" />
            <span>Customize Portfolio Info</span>
          </button>
        </div>

      </div>

      {/* Rich Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 light:text-purple-600 font-bold">
                {selectedProject.categoryLabel}
              </span>
              {selectedProject.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Featured Case Study
                </span>
              )}
            </div>

            <h3 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900">
              {selectedProject.title}
            </h3>

            {/* Visual Preview Banner */}
            <div className="my-5 rounded-2xl bg-gradient-to-r from-purple-950/60 to-blue-950/60 p-4 border border-slate-800">
              {renderCardMockup(selectedProject)}
            </div>

            {/* Full Description */}
            <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed">
              <p>{selectedProject.fullDescription}</p>
            </div>

            {/* Key Features List */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
                Key Features &amp; Architecture
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-purple-300 dark:text-purple-300 light:text-purple-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all flex items-center gap-2 shadow-md shadow-purple-600/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live Demo</span>
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 transition-all flex items-center gap-2 border border-slate-700 dark:border-slate-700 light:border-slate-300"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
