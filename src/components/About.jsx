import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-accent to-accent/50 rounded-lg flex items-center justify-center">
              <div className="w-72 h-72 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
             I'm a passionate full-stack developer specializing in the MERN stack, with hands-on experience building real-world web applications. I focus on developing scalable and user-friendly solutions using React, Node.js, and modern web technologies.
            </p>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              My journey in tech is driven by problem-solving and continuous learning. I have built projects like a real-time chat application, a job portal, and an AI-powered chat system, where I worked on authentication, API design, and real-time communication.
                          </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-accent text-2xl">⚡</span>
                <span className="text-gray-300">Skilled in React, JavaScript, Node.js, Express, and MongoDB</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent text-2xl">🎨</span>
                <span className="text-gray-300">Strong understanding of REST APIs, JWT authentication, and state management using Redux Toolkit</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent text-2xl">🚀</span>
                <span className="text-gray-300">Built and deployed full-stack applications with real-time features and AI integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
