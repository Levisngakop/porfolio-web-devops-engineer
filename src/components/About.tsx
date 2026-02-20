import React from 'react';
import { Clock, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-12 px-6 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          About Me
        </h2>

        {/* The Beginning */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 mb-6 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-blue-400" />
            The Beginning
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            My journey started with a curiosity about how systems work at scale. From my first encounter with Linux servers
            to deploying my first application, I knew I wanted to be part of the infrastructure that powers the digital world.
          </p>
        </div>

        {/* The Growth */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 mb-6 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-green-400" />
            The Growth
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Over 5+ years, I’ve evolved from managing single servers to orchestrating complex Kubernetes clusters,
            designing production-grade AWS VPCs, and building CI/CD pipelines that deploy reliably and efficiently.
          </p>
        </div>

        {/* The Impact */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-purple-400" />
            The Impact
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Today, I focus on empowering teams through automation, building resilient cloud infrastructure,
            and sharing knowledge. I help organizations streamline deployments, strengthen observability,
            and create systems that scale confidently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
