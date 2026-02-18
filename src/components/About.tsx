import React from 'react';
import { Clock, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">About Me</h2>

        {/* The Beginning */}
        <div className="bg-slate-700 rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/20 mb-6">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 flex items-center">
            <Clock className="w-5 h-5 mr-3 text-blue-400" /> The Beginning
          </h3>
          <p className="text-slate-300 text-base leading-relaxed">
            My journey started with a curiosity about how systems work at scale. From my first encounter with Linux servers
            to deploying my first application, I knew I wanted to be part of the infrastructure that powers the digital world.
          </p>
        </div>

        {/* The Growth */}
        <div className="bg-slate-700 rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/20 mb-6">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 flex items-center">
            <Target className="w-5 h-5 mr-3 text-green-400" /> The Growth
          </h3>
          <p className="text-slate-300 text-base leading-relaxed">
            Over 5+ years, I’ve evolved from managing single servers to orchestrating complex Kubernetes clusters,
            designing production-grade AWS VPCs, and building CI/CD pipelines that deploy thousands of times per day.
          </p>
        </div>

        {/* The Impact */}
        <div className="bg-slate-700 rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/20 mb-6">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 flex items-center">
            <CheckCircle className="w-5 h-5 mr-3 text-purple-400" /> The Impact
          </h3>
          <p className="text-slate-300 text-base leading-relaxed">
            Today, I focus on empowering teams through automation, building resilient infrastructure, and sharing knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

