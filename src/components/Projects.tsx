import React from 'react';
import { ExternalLink, Github, Cloud, GitBranch, Server, Activity } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Production-Grade AWS VPC',
      description: 'Designed and implemented a secure, scalable VPC with public/private subnets, ALB, WAF, Bastion Host, and NAT Gateway. Supports high-availability across multiple AZs.',
      icon: <Cloud className="text-blue-400" size={32} />,
      technologies: ['AWS VPC', 'Terraform', 'ALB', 'WAF', 'CloudFormation'],
      highlights: [
        'Multi-AZ high availability',
        'Security groups & NACLs',
        'Auto-scaling capabilities',
        'Cost optimization'
      ]
    },
    {
      id: 2,
      title: 'CI/CD Pipeline with GitHub Actions',
      description: 'Built pipelines for Node.js apps with automated testing, security scans, and multi-environment deployments. Reduced deployment time by 80%.',
      icon: <GitBranch className="text-green-400" size={32} />,
      technologies: ['GitHub Actions', 'Docker', 'SonarQube', 'AWS ECR', 'ECS'],
      highlights: [
        'Automated testing & quality gates',
        'Security vulnerability scanning',
        'Blue-green deployments',
        'Rollback strategies'
      ]
    },
    {
      id: 3,
      title: 'EKS Migration Project',
      description: 'Led migration of EC2-based apps to Amazon EKS. Implemented GitOps workflows with ArgoCD and Helm, plus monitoring with Prometheus & Grafana.',
      icon: <Server className="text-purple-400" size={32} />,
      technologies: ['Amazon EKS', 'ArgoCD', 'Helm', 'Istio', 'Prometheus'],
      highlights: [
        'Zero-downtime migration',
        'GitOps workflow implementation',
        'Service mesh with Istio',
        'Horizontal Pod Autoscaling'
      ]
    },
    {
      id: 4,
      title: 'Monitoring & Logging Platform',
      description: 'Centralized logging & monitoring solution using CloudWatch, Loki, and Prometheus with custom dashboards and proactive alerting.',
      icon: <Activity className="text-orange-400" size={32} />,
      technologies: ['CloudWatch', 'Loki', 'Prometheus', 'Grafana', 'AlertManager'],
      highlights: [
        'Centralized log aggregation',
        'Custom metrics & dashboards',
        'Intelligent alerting',
        'Performance optimization'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real-world DevOps solutions delivering business value and operational excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-slate-700 rounded-xl p-8 hover:bg-slate-750 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-blue-500 shadow-lg"
            >
              <div className="flex items-center mb-6">
                {project.icon}
                <h3 className="text-2xl font-bold ml-4">{project.title}</h3>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-600 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" /> Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-slate-600 hover:border-slate-500 rounded-lg transition-colors"
                >
                  <Github size={16} className="mr-2" /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

