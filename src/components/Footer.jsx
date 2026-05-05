import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Footer */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              <span>Port</span>
              <span className="text-accent">folio</span>
            </h3>
            <p className="text-gray-400 text-sm">
              A full-stack developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent transition text-sm">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-accent transition text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-accent transition text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/pavanpappala32" className="text-gray-400 hover:text-accent transition text-2xl">
                🐙
              </a>
              <a href="https://www.linkedin.com/in/pavanpappala32180/" className="text-gray-400 hover:text-accent transition text-2xl">
                💼
              </a>
              <a href="https://x.com/Pawan_177" className="text-gray-400 hover:text-accent transition text-2xl">
                𝕏
              </a>
              <a href="mailto:pavanpappala32@example.com" className="text-gray-400 hover:text-accent transition text-2xl">
                📧
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Pavan's Portfolio. All rights reserved.</p>
          <p>Designed & Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
