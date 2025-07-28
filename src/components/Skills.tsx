import React from 'react';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Shield, 
  Database, 
  Monitor,
  Code,
  Server,
  Workflow,
  Lock,
  Terminal,
  Settings
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', icon: <Cloud className="text-orange-400" size={32} />, level: 95 },
        { name: 'Azure', icon: <Cloud className="text-blue-400" size={32} />, level: 80 },
        { name: 'GCP', icon: <Cloud className="text-green-400" size={32} />, level: 70 }
      ]
    },
    {
      title: 'Containerization & Orchestration',
      skills: [
        { name: 'Docker', icon: <Container className="text-blue-500" size={32} />, level: 95 },
        { name: 'Kubernetes', icon: <Server className="text-blue-400" size={32} />, level: 90 },
        { name: 'Helm', icon: <Settings className="text-purple-400" size={32} />, level: 85 }
      ]
    },
    {
      title: 'CI/CD & Automation',
      skills: [
        { name: 'GitHub Actions', icon: <GitBranch className="text-gray-400" size={32} />, level: 95 },
        { name: 'ArgoCD', icon: <Workflow className="text-orange-400" size={32} />, level: 85 },
        { name: 'Jenkins', icon: <Settings className="text-blue-400" size={32} />, level: 80 }
      ]
    },
    {
      title: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', icon: <Code className="text-purple-500" size={32} />, level: 95 },
        { name: 'Ansible', icon: <Settings className="text-red-400" size={32} />, level: 80 },
        { name: 'CloudFormation', icon: <Cloud className="text-orange-400" size={32} />, level: 85 }
      ]
    },
    {
      title: 'Monitoring & Logging',
      skills: [
        { name: 'Prometheus', icon: <Monitor className="text-orange-500" size={32} />, level: 90 },
        { name: 'Grafana', icon: <Monitor className="text-orange-400" size={32} />, level: 85 },
        { name: 'ELK Stack', icon: <Database className="text-yellow-400" size={32} />, level: 80 }
      ]
    },
    {
      title: 'Security & Compliance',
      skills: [
        { name: 'HashiCorp Vault', icon: <Lock className="text-yellow-400" size={32} />, level: 85 },
        { name: 'AWS IAM', icon: <Shield className="text-orange-400" size={32} />, level: 90 },
        { name: 'Security Scanning', icon: <Shield className="text-green-400" size={32} />, level: 80 }
      ]
    },
    {
      title: 'Programming & Scripting',
      skills: [
        { name: 'Python', icon: <Code className="text-blue-400" size={32} />, level: 85 },
        { name: 'Bash', icon: <Terminal className="text-green-400" size={32} />, level: 90 },
        { name: 'Go', icon: <Code className="text-blue-300" size={32} />, level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building and maintaining modern cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6 text-center text-slate-200">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg mb-6 text-blue-100">
              The DevOps landscape evolves rapidly. I stay current with emerging technologies 
              and best practices through continuous learning and hands-on experimentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-700 rounded-full text-sm">
                🎯 Currently Learning: Istio Service Mesh
              </span>
              <span className="px-4 py-2 bg-purple-700 rounded-full text-sm">
                📚 Next Up: Platform Engineering
              </span>
              <span className="px-4 py-2 bg-blue-700 rounded-full text-sm">
                🔬 Experimenting With: WebAssembly
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;