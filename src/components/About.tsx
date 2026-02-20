import React from 'react';
import { Server, GitBranch, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-12 px-6 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          About Me
        </h2>

        {/* Who I Am */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 mb-6 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <Server className="w-6 h-6 mr-3 text-blue-400" />
            Cloud & DevOps Engineer
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            I design, implement, and optimize cloud-native infrastructure with a strong focus on scalability,
            reliability, and automation. My work centers around AWS, Kubernetes, CI/CD pipelines, and
            infrastructure as code.
          </p>
        </div>

        {/* What I Do */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 mb-6 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <GitBranch className="w-6 h-6 mr-3 text-green-400" />
            Automation & Delivery
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            I build secure and efficient CI/CD pipelines, implement GitOps workflows,
            containerize applications, and manage Kubernetes clusters that support
            modern, high-availability production environments.
          </p>
        </div>

        {/* What I Deliver */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <ShieldCheck className="w-6 h-6 mr-3 text-purple-400" />
            Reliability & Impact
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            I help teams ship faster, reduce downtime, strengthen observability,
            and implement best practices that improve deployment confidence
            and operational excellence across the entire lifecycle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
