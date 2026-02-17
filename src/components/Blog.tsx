import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

const Blog: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'AWS Production VPC',
      description:
        'Designed and deployed a production-grade AWS VPC with public/private subnets, ALB, NAT Gateways, CloudFront, SSL via ACM, and monitoring with CloudWatch.',
      tech: ['AWS', 'VPC', 'CloudFront', 'ALB', 'CloudWatch'],
      github: 'https://github.com/levisdevops/aws-vpc-project'
    },
    {
      id: 2,
      name: 'Kubernetes GitOps Deployment',
      description:
        'Implemented GitOps CI/CD pipelines with ArgoCD for automated deployment of microservices on EKS clusters with rolling updates and health checks.',
      tech: ['Kubernetes', 'EKS', 'ArgoCD', 'GitOps', 'CI/CD'],
      github: 'https://github.com/levisdevops/k8s-gitops-project'
    },
    {
      id: 3,
      name: 'CI/CD Automation with Jenkins',
      description:
        'Automated build, test, and deployment pipelines for multiple repositories using Jenkins, Docker, and GitHub Actions.',
      tech: ['Jenkins', 'Docker', 'GitHub Actions', 'CI/CD', 'Automation'],
      github: 'https://github.com/levisdevops/jenkins-ci-cd'
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog / Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my DevOps work — from cloud infrastructure to CI/CD pipelines.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View on GitHub
                  <ExternalLink size={16} className="ml-2" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

