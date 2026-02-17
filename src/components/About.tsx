import React from 'react';
import { User, Target, Award } from 'lucide-react';
import AboutCard from './AboutCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Cloud Native DevOps Engineer building scalable, reliable, and secure cloud infrastructure for global teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Cards */}
          <div className="space-y-6">
            <AboutCard
              icon={<User className="text-blue-400 mr-3" size={24} />}
              title="The Beginning"
              description="Started exploring Linux servers and deploying my first app. Fascinated by how systems work at scale."
            />
            <AboutCard
              icon={<Target className="text-green-400 mr-3" size={24} />}
              title="The Growth"
              description="Over 5+ years, I orchestrated Kubernetes clusters, built production-grade AWS VPCs, and automated CI/CD pipelines."
            />
            <AboutCard
              icon={<Award className="text-purple-400 mr-3" size={24} />}
              title="The Impact"
              description="Empowering teams through automation, building resilient infrastructure, and sharing knowledge globally."
            />
          </div>

          {/* Profile & Core Values */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg text-center">
              <img
                src="/profile.jpg"
                alt="Levis Ngakop"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-indigo-500 shadow-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Levis Ngakop</h3>
              <p className="text-blue-100 mb-4">Cloud Native DevOps Engineer</p>
              <div className="flex justify-center space-x-6 text-sm">
                <div className="text-center">
                  <p className="font-semibold">5+ Years</p>
                  <p className="text-blue-200">Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">3+</p>
                  <p className="text-blue-200">Certifications</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Automation & CI/CD
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Security & Infrastructure Hardening
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Reliability & Resilience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Knowledge Sharing & Mentoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

