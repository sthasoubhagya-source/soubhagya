/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PersonalizeModal } from './components/PersonalizeModal';
import { 
  defaultProfile, 
  defaultSkills, 
  defaultProjects, 
  defaultEducation, 
  defaultCertifications 
} from './data/defaultData';
import { Profile } from './types/portfolio';

export default function App() {
  // Theme state: dark mode default as requested
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('devfolio_theme');
    if (saved) return saved === 'dark';
    return true; // Default dark theme
  });

  // Profile state: allows user to personalize name, bio, links, and avatar
  const [profile, setProfile] = useState<Profile>(() => {
    const saved = localStorage.getItem('devfolio_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...defaultProfile,
          ...parsed,
          avatarUrl: parsed.avatarUrl || defaultProfile.avatarUrl,
        };
      } catch (e) {
        console.error('Error parsing saved profile', e);
      }
    }
    return defaultProfile;
  });

  const [skills] = useState(defaultSkills);
  const [projects] = useState(defaultProjects);
  const [education] = useState(defaultEducation);
  const [certifications] = useState(defaultCertifications);

  // Modals state
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);

  // Apply dark mode class to root HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('devfolio_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('devfolio_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleSaveProfile = (updated: Profile) => {
    setProfile(updated);
    localStorage.setItem('devfolio_profile', JSON.stringify(updated));
  };

  const handleResetDefaults = () => {
    setProfile(defaultProfile);
    localStorage.removeItem('devfolio_profile');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950 text-slate-100 selection:bg-purple-600 selection:text-white' 
        : 'bg-slate-50 text-slate-900 selection:bg-purple-500 selection:text-white'
    }`}>
      {/* Sticky Navigation */}
      <Navbar
        profile={profile}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPersonalize={() => setIsPersonalizeOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="relative">
        {/* Hero Section */}
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* About Section */}
        <About
          profile={profile}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* Skills Section */}
        <Skills skills={skills} />

        {/* Projects Section */}
        <Projects
          projects={projects}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* Education & Qualifications Section */}
        <Education
          education={education}
          certifications={certifications}
        />

        {/* Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPersonalize={() => setIsPersonalizeOpen(true)}
      />

      {/* Printable Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        skills={skills}
        projects={projects}
        education={education}
        certifications={certifications}
      />

      {/* Personalize Profile Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
