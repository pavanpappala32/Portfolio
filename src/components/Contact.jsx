import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/pavanpappala32' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/pavanpappala32180/' },
    { name: 'Twitter', icon: '𝕏', url: 'https://x.com/Pawan_177' },
    { name: 'Email', icon: '📧', url: 'mailto:pavanpappala32@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Get In <span className="text-accent">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-opacity-90 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-xl border border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-6">Let's Connect</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Jabalpur ,India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">pavanpappala32@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white font-semibold">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to reach out if you have any questions!
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center justify-center gap-2 p-4 bg-secondary rounded-lg border border-accent/20 hover:border-accent hover:bg-accent/10 transition"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-white font-semibold text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
