import React from 'react';
import { Lightbulb, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const journey = [
    {
      title: "The Beginning",
      icon: <Lightbulb className="w-12 h-12 text-yellow-400 mb-3" />,
      description:
        "My journey started with a curiosity about how systems work at scale. From my first encounter with Linux servers to deploying my first application, I knew I wanted to be part of the infrastructure that powers the digital world.",
    },
    {
      title: "The Growth",
      icon: <Target className="w-12 h-12 text-green-400 mb-3" />,
      description:
        "Over 5+ years, I’ve evolved from managing single servers to orchestrating complex Kubernetes clusters, designing production-grade AWS VPCs, and building CI/CD pipelines that deploy thousands of times per day.",
    },
    {
      title: "The Impact",
      icon: <Users className="w-12 h-12 text-blue-400 mb-3" />,
      description:
        "Today, I focus on empowering teams through automation, building resilient infrastructure, and sharing knowledge.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-800 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">About Me</h2>

        {/* About Me Card */}
        <div className="bg-slate-700 rounded-2xl p-8 md:p-12 shadow-lg shadow-blue-500/20 mb-12 text-center">
          <p className="text-lg leading-relaxed">
            I am a Cloud Native DevOps Engineer with over 5 years of experience building scalable, resilient, and
            automated cloud infrastructure. I specialize in AWS, Kubernetes, GitOps, CI/CD, and helping teams achieve
            operational excellence. I enjoy mentoring, collaborating with global teams, and continuously learning
            to stay ahead in the fast-evolving DevOps landscape.
          </p>
        </div>

        {/* Career Journey Cards */}
        <div className="space-y-6">
          {journey.map((step) => (
            <div
              key={step.title}
              className="bg-slate-700 rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/20 flex flex-col items-start md:items-start"
            >
              {step.icon}
              <h4 className="text-2xl font-semibold text-blue-300 mb-2">{step.title}</h4>
              <p className="text-slate-200">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="mailto:levis@levisngakop.com"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md shadow-green-500/50 hover:shadow-lg hover:shadow-green-400/60 hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact for Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

