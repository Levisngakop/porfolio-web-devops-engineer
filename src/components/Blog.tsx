import React from 'react';
import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Project Kuiper: What It Means for Africa\'s Cloud Future',
      excerpt: 'Exploring how Amazon\'s Project Kuiper satellite constellation could revolutionize cloud connectivity across Africa, bridging the digital divide and enabling new possibilities for cloud-native applications.',
      date: '2025-07-30',
      readTime: '8 min read',
      tags: ['AWS', 'Africa', 'Satellite', 'Cloud'],
      platform: 'Medium',
      url: '#'
    },
    {
      id: 2,
      title: 'Building Resilient Kubernetes Clusters: Lessons from Production',
      excerpt: 'Key insights from managing Kubernetes in production environments, including best practices for high availability, disaster recovery, and automated scaling strategies.',
      date: '2023-12-10',
      readTime: '12 min read',
      tags: ['Kubernetes', 'DevOps', 'Production', 'Reliability'],
      platform: 'Medium',
      url: '#'
    },
    {
      id: 3,
      title: 'GitOps vs Traditional CI/CD: A Practical Comparison',
      excerpt: 'A deep dive into GitOps methodology, comparing it with traditional CI/CD approaches and sharing real-world implementation experiences with ArgoCD.',
      date: '2023-11-22',
      readTime: '10 min read',
      tags: ['GitOps', 'CI/CD', 'ArgoCD', 'DevOps'],
      platform: 'Medium',
      url: '#'
    },
    {
      id: 4,
      title: 'Securing Your AWS Infrastructure: Beyond the Basics',
      excerpt: 'Advanced security strategies for AWS environments, including IAM best practices, network security, and implementing zero-trust architecture principles.',
      date: '2023-10-08',
      readTime: '15 min read',
      tags: ['AWS', 'Security', 'IAM', 'Zero-Trust'],
      platform: 'Medium',
      url: '#'
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Blog
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Sharing insights, experiences, and lessons learned from the DevOps trenches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-slate-700 rounded-lg p-6 hover:bg-slate-650 transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-blue-500"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm">
                  {article.platform}
                </span>
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors">
                {article.title}
              </h3>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-slate-400 text-sm">
                  <Clock size={16} className="mr-2" />
                  {article.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-600 text-slate-300 rounded text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Read Article
                <ExternalLink size={16} className="ml-2" />
              </a>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 max-w-2xl mx-auto">
            <BookOpen size={48} className="mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4">Follow My Journey</h3>
            <p className="text-lg mb-6 text-blue-100">
              I regularly share insights about DevOps, cloud architecture, and emerging technologies. 
              Join thousands of readers who stay updated with the latest trends and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://medium.com/@levisngakop47"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Follow on Medium
              </a>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
