import React from 'react';
import { Clock, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-12 px-6 bg-slate-800 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">About Me</h2>

        <div className="bg-slate-700 rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/20 mb-6">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 flex items-center">
            <Clock className="w-5 h-5 mr-3 text-blue-400" /> Cloud Native DevOps Engineer
          </h3>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            I design, automate, and maintain scalable cloud-native infrastructure on AWS and Kubernetes. 
            With over 5 years of experience, I’ve built production-grade environments, CI/CD pipelines, 
            and systems that improve deployment speed, reliability, and operational efficiency.
          </p>

          <p className="text-slate-300 text-base leading-relaxed mb-4">
            Beyond infrastructure, I empower teams through mentorship, sharing best practices, and streamlining 
            cloud-native operations, monitoring, and incident management.
          </p>

          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Architected multi-tier AWS VPCs with high availability</li>
            <li>Built GitOps CI/CD pipelines that deploy thousands of times per day</li>
            <li>Mentored engineers to adopt cloud-native DevOps practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

