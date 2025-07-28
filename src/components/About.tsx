import React from 'react';
import { User, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A journey from humble beginnings to building enterprise-grade cloud infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <User className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">The Beginning</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                My journey started with a curiosity about how systems work at scale. From my first 
                encounter with Linux servers to deploying my first application, I knew I wanted to 
                be part of the infrastructure that powers the digital world.
              </p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">The Growth</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Over 5+ years, I've evolved from managing single servers to orchestrating 
                complex Kubernetes clusters, designing production-grade AWS VPCs, and building 
                CI/CD pipelines that deploy thousands of times per day.
              </p>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">The Impact</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Today, I focus on empowering teams through automation, building resilient 
                infrastructure, and sharing knowledge. My goal is to make complex systems 
                simple and reliable, enabling others to focus on what they do best.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg text-center">
              <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User size={64} className="text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Levis Ngakop</h3>
              <p className="text-blue-100 mb-4">Cloud Native DevOps Engineer</p>
              <div className="flex justify-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="mr-2" size={16} />
                  </div>
                  <p>5+ Years</p>
                  <p className="text-blue-200">Experience</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="mr-2" size={16} />
                  </div>
                  <p>3+</p>
                  <p className="text-blue-200">Certifications</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Automation over manual processes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Security by design, not as an afterthought
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Continuous learning and knowledge sharing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Reliability and resilience in every solution
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