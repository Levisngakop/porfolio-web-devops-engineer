import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800 text-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">About Me</h2>
        <p className="text-lg mb-6 leading-relaxed text-center">
          I am a Cloud Native DevOps Engineer with over 5 years of experience building scalable, resilient, and
          automated cloud infrastructure. I specialize in AWS, Kubernetes, GitOps, CI/CD, and helping teams achieve
          operational excellence.
        </p>

        <p className="text-lg mb-6 leading-relaxed text-center">
          My passion is not only building systems but also enabling people to work efficiently with modern
          cloud-native technologies. I enjoy mentoring, collaborating with global teams, and continuously learning
          to stay ahead in the fast-evolving DevOps landscape.  
          <br /><br />
          🎯 <strong>Currently Exploring:</strong> MLOps & AIOps | 🧠 <strong>Deepening Knowledge In:</strong> Platform Engineering | ⚡ <strong>Researching:</strong> LLMOps
        </p>

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

