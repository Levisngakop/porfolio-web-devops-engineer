import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-slate-900">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <img
            src="/profile.jpg"
            alt="Levis Ngakop - Cloud Native DevOps Engineer"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-indigo-600 shadow-lg object-cover"
          />

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Levis Ngakop
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            Cloud Native DevOps Engineer
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-400 mb-6 font-medium">
            Empowering Systems. Enabling People.
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I am passionate about automation, cloud infrastructure, and helping teams scale. Over the past 5+ years,
            I’ve built resilient, production-grade cloud-native solutions with AWS, Kubernetes, and CI/CD pipelines.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/levisngakop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/levisngakop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:levisngakop47@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Mail size={24} />
            </a>
            {/* Resume Download */}
            <a
              href="/resume/Levis_DevOps_Engineer_Resume.pdf"
              download
              aria-label="Download Resume"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FileText size={24} />
            </a>
          </div>

          {/* Scroll Down */}
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            className="animate-bounce mt-4 text-blue-400 hover:text-blue-300 focus:outline-none"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

