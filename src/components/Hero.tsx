import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Levis Ngakop
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
            Cloud Native DevOps Engineer
          </h2>
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
            Empowering Systems. Enabling People.
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm a DevOps Engineer passionate about automation, infrastructure, and inspiring growth. 
            With 5+ years of experience building resilient cloud-native solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:levis@example.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Let's Connect
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all"
            >
              View My Work
            </button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-slate-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;