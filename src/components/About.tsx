import React from 'react';
import { Clock, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-12 px-6 bg-slate-900 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          About Me
        </h2>

        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 hover:scale-[1.01] transition-transform duration-300">
          {/* Intro */}
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            I design and automate cloud-native infrastructure, CI/CD pipelines, and production-grade AWS environments 
            that help teams scale, improve reliability, and streamline deployments. With over 5 years of experience, 
            I focus on creating systems that empower teams and optimize workflows.
          </p>

          {/* Approach */}
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            My approach combines technical precision with a focus on people — ensuring systems not only work reliably
            but also enable teams to move faster, reduce friction, and adopt best practices seamlessly.
          </p>

          {/* Mentorship */}
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            I actively mentor engineers, guide teams through complex deployments, and introduce automation
            and observability practices that strengthen operational excellence.
          </p>

          {/* Challenge Statement */}
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I enjoy tackling challenging projects that require building resilient, scalable systems,
            optimizing workflows, and enabling teams to achieve more.
          </p>

          {/* Key Achievements */}
          <ul className="list-disc list-inside text-slate-300 space-y-3 text-lg">
            <li>Architected multi-tier AWS VPCs with high availability and security</li>
            <li>Built GitOps CI/CD pipelines deploying thousands of times per day</li>
            <li>Mentored engineers to adopt cloud-native DevOps best practices</li>
            <li>Implemented monitoring and alerting solutions that improve incident response</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
