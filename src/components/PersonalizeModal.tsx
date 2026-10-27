import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Save, 
  RotateCcw, 
  User, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2 
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  onSaveProfile: (updated: Profile) => void;
  onResetDefaults: () => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<Profile>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Reset all details back to default placeholders?')) {
      onResetDefaults();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl p-6 sm:p-8 text-left relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                Personalize Portfolio Details
              </h3>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                Easily replace placeholders with your real name, contact info, and links.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedSuccess && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Profile successfully updated and saved to your browser!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Soubhagya Shrestha"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
                Professional Role Title
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. Aspiring Web Developer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Email & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. you@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
                Location / Availability
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Remote / Kathmandu, Nepal"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
                GitHub Profile URL
              </label>
              <input
                type="text"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/yourusername"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                placeholder="https://linkedin.com/in/yourusername"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
          </div>

          {/* Short Bio */}
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
              Short Hero Introduction
            </label>
            <textarea
              rows={2}
              value={formData.shortBio}
              onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500 leading-relaxed"
            />
          </div>

          {/* Custom Avatar URL option with live thumbnail preview */}
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 light:text-slate-600 mb-1">
              Profile Photo Asset
            </label>
            <div className="flex items-center gap-3">
              {formData.avatarUrl && (
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-purple-500/40 shrink-0 shadow-sm bg-slate-950">
                  <img
                    src={formData.avatarUrl}
                    alt="Preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              <input
                type="text"
                value={formData.avatarUrl || ''}
                onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                placeholder="Asset path or image URL"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Placeholders</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
