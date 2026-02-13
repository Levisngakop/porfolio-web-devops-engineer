import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ijs90dg',           // Your Service ID
        'portfolio_contact',         // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'Portfolio Contact' // For the {{title}} field in template
        },
        'P4hMW9etAr2Lk4a0u'         // Your Public Key
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Something went wrong. Please email me directly at levisngakop47@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to build resilient, scalable infrastructure? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Whether you're looking to optimize your cloud infrastructure, implement DevOps best practices,
                or need guidance on your digital transformation journey, I'm here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-400">levisngakop47@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-400">+237674836635</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-slate-400">Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">What I Can Help With</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-300" />
                  Cloud Architecture & Migration
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-300" />
                  CI/CD Pipeline Implementation
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-300" />
                  Kubernetes & Container Orchestration
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-300" />
                  Infrastructure as Code (IaC)
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-300" />
                  Security & Compliance Automation
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-3 text-green-300" />
                  Monitoring & Observability
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="mx-auto text-green-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-green-400">Message Sent!</h4>
                <p className="text-slate-300">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-6">
              Let's build something resilient together. From initial consultation to full implementation,
              I'm here to guide your infrastructure journey.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
