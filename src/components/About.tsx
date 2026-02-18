import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">About Me</h2>
        
        <p className="text-lg mb-6 leading-relaxed text-center">
          I am a Cloud Native DevOps Engineer with over 5 years of experience building scalable, resilient, and
          automated cloud infrastructure. I specialize in AWS, Kubernetes, GitOps, CI/CD, and helping teams achieve
          operational excellence. I enjoy mentoring, collaborating with global teams, and continuously learning
          to stay ahead in the fast-evolving DevOps landscape.
        </p>

        {/* Career Journey Section */}
        <div className="mt-10 space-y-6">
          <div>
            <h4 className="text-2xl font-semibold text-blue-300 mb-2">The Beginning</h4>
            <p className="text-lg text-slate-200">
              My journey started with a curiosity about how systems work at scale. From my first encounter with Linux
              servers to deploying my first application, I knew I wanted to be part of the infrastructure that powers
              the digital world.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-blue-300 mb-2">The Growth</h4>
            <p className="text-lg text-slate-200">
              Over 5+ years, I’ve evolved from managing single servers to orchestrating complex Kubernetes clusters,
              designing production-grade AWS VPCs, and building CI/CD pipelines that deploy thousands of times per day.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-blue-300 mb-2">The Impact</h4>
            <p className="text-lg text-slate-200">
              Today, I focus on empowering teams through automation, building resilient infrastructure, and sharing knowledge.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
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

