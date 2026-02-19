import React from 'react';
import { Clock, Target, CheckCircle, Users, Zap } from 'lucide-react';

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
            <Clock className="w-6 h-6 mr-3 text-blue-400" /> The Beginning
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            My journey started with a curiosity about how systems work at scale. From my first encounter with Linux servers
            to deploying my first application, I knew I wanted to be part of the infrastructure that powers the digital world.
          </p>
        </div>

        {/* The Growth */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 mb-6 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-green-400" /> The Growth
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Over 5+ years, I’ve evolved from managing single servers to orchestrating complex Kubernetes clusters,
            designing production-grade AWS VPCs, and building CI/CD pipelines that deploy thousands of times per day.
          </p>
        </div>

        {/* The Impact */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 mb-6 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-purple-400" /> The Impact
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Today, I focus on empowering teams through automation, building resilient infrastructure, and sharing knowledge.
            I actively mentor junior engineers, introduce best practices for cloud-native operations, and help organizations
            streamline deployments, monitoring, and incident management processes.
          </p>
        </div>

        {/* Skills & Achievements */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" /> Skills & Achievements
          </h3>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
            <li>Architected multi-tier AWS VPCs with high availability and security</li>
            <li>Built GitOps CI/CD pipelines deploying thousands of times per day</li>
            <li>Mentored engineers to adopt cloud-native DevOps best practices</li>
            <li>Implemented monitoring and alerting solutions that improve incident response</li>
            <li>Streamlined workflows and optimized deployment processes for multiple teams</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
