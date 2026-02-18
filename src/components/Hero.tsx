import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <img
            src="/profile.jpg"
            alt="Levis Ngakop - Cloud Native DevOps Engineer"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-indigo-600 shadow-lg object-cover"
          />

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Levis Ngakop
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl text-slate-200 mb-4 font-light">
            Cloud Native DevOps Engineer
          </h2>

          {/* Availability Badge */}
          <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full font-medium mb-6 text-sm md:text-base shadow-md">
            Available for remote work (EU/UK time zones)
          </div>

          {/* Tagline with subtle card style */}
          <p className="text-xl md:text-2xl text-blue-400 mb-6 font-medium bg-slate-800 bg-opacity-20 inline-block px-4 py-1 rounded-lg">
            Empowering Systems. Enabling People.
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I am passionate about automation, cloud infrastructure, and helping teams scale. Over the past 5+ years,
            I’ve built resilient, production-grade cloud-native solutions with AWS, Kubernetes, and CI/CD pipelines.
          </p>

          {/* Tech Icons Row */}
          <div className="flex justify-center space-x-4 mb-10">
            <img src="/tech-icons/aws.svg" alt="AWS" className="w-6 h-6" />
            <img src="/tech-icons/kubernetes.svg" alt="Kubernetes" className="w-6 h-6" />
            <img src="/tech-icons/git.svg" alt="Git" className="w-6 h-6" />
            <img src="/tech-icons/ci-cd.svg" alt="CI/CD" className="w-6 h-6" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[Github, Linkedin, Mail, FileText].map((Icon, i) => (
              <a
                key={i}
                href={
                  i === 0
                    ? "https://github.com/levisngakop"
                    : i === 1
                    ? "https://linkedin.com/in/levisngakop"
                    : i === 2
                    ? "mailto:levisngakop47@gmail.com"
                    : "/resume/Levis_DevOps_Engineer_Resume.pdf"
                }
                target={i < 3 ? "_blank" : undefined}
                rel={i < 3 ? "noopener noreferrer" : undefined}
                aria-label={Icon.name}
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...(i === 3 ? { download: true } : {})}
              >
                <Icon size={24} />
              </a>
            ))}
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

