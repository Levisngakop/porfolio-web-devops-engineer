import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';
import ContactCard from './ContactCard'; // Make sure this exists
import InputField from './InputField';   // Make sure this exists

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to build resilient, scalable infrastructure? Let's discuss your next DevOps or cloud project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-6 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-300 leading-relaxed">
                Whether it's optimizing cloud infrastructure, implementing CI/CD, or planning digital transformation, I can help.
              </p>
              <ContactCard icon={<Mail size={20} />} title="Email" detail="levisngakop47@gmail.com" color="bg-blue-600" />
              <ContactCard icon={<Phone size={20} />} title="Phone" detail="+237674836635" color="bg-purple-600" />
              <ContactCard icon={<MapPin size={20} />} title="Location" detail="Remote Work Available" color="bg-green-600" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="mx-auto text-green-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-green-400">Message Sent!</h4>
                <p className="text-slate-300">Thank you! I will get back to you shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tell me about your project..."
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Send size={20} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

