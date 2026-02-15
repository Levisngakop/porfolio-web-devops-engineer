
import React from 'react';
import { Award, Clock, CheckCircle, Target } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      status: 'completed',
      date: '2022',
      description: 'Foundational understanding of AWS cloud services and architecture',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 2,
      title: 'HashiCorp Vault Associate',
      issuer: 'HashiCorp',
      status: 'completed',
      date: '2023',
      description: 'Secrets management and security automation expertise',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      title: 'AWS Certified DevOps Engineer – Professional',
      issuer: 'Amazon Web Services',
      status: 'in-progress',
      date: 'Expected 2024',
      description: 'Advanced DevOps practices and AWS service integration',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const upcomingCertifications = [
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      timeline: 'Q2 2024'
    },
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      timeline: 'Q3 2024'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Learning
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Validated expertise and continuous professional development
          </p>
        </div>

        {/* Current Certifications */}
        <div className="mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                  {cert.status === 'completed' ? (
                    <CheckCircle size={32} className="text-white" />
                  ) : cert.status === 'in-progress' ? (
                    <Clock size={32} className="text-white animate-spin-slow" />
                  ) : (
                    <Target size={32} className="text-white" />
                  )}
                </div>

                <div className="flex items-center justify-center mb-2">
                  {cert.status === 'completed' && (
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm mr-2">
                      Certified
                    </span>
                  )}
                  {cert.status === 'in-progress' && (
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm mr-2">
                      In Progress
                    </span>
                  )}
                  <span className="text-slate-400 text-sm">{cert.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 text-center">{cert.title}</h3>
              <p className="text-blue-400 text-center mb-4">{cert.issuer}</p>
              <p className="text-slate-300 text-sm text-center leading-relaxed">
                {cert.description}
              </p>

              {cert.status === 'in-progress' && (
                <div className="mt-4">
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 text-center">75% Complete</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="bg-slate-800 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Award className="text-yellow-400" size={28} />
            Learning Roadmap
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-lg p-6 border-l-4 border-blue-400 relative"
              >
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-blue-400 mb-2">{cert.issuer}</p>
                <div className="flex items-center text-sm text-slate-400">
                  <Clock size={16} className="mr-2" />
                  Target: {cert.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Development Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-blue-100">Active Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Hours of Learning/Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">12+</div>
              <div className="text-blue-100">Technical Courses Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

