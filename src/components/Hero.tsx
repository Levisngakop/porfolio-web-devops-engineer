import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="pt-20 pb-12 px-6 bg-slate-900 text-slate-200"
    >
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="text-center md:text-left md:max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
            Levis Ngakop
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
            Cloud Native DevOps Engineer
          </h2>

          <p className="text-lg text-slate-300 mb-2">
            Consultant at <strong>ParadigmIT Solutions LLC</strong>
          </p>

          <p className="text-lg text-slate-400 mb-6">
            Available for remote work (EU/UK time zones)
          </p>

          {/* Resume Button */}
          <a
            href="/Levis_Ngakop_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="mailto:your-email@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 text-slate-300 hover:text-blue-400"
            >
              <Mail className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 text-slate-300 hover:text-gray-300"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 text-slate-300 hover:text-blue-500"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="/Levis_Ngakop_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 text-slate-300 hover:text-purple-400"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-10 md:mt-0 md:ml-12 flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Levis Ngakop"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
