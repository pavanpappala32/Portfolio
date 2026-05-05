import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CHATLY (Real-Time Chat Application)',
      description: 'A real-time chat application with instant messaging, typing indicators, and online user status.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO','Redux Toolkit'],
      image: '💬',
      link: 'https://chatly-st7q.onrender.com',
      github: 'https://github.com/pavanpappala32/Chatly',
    },
    {
      id: 2,
      title: 'CAREER CONNECT (Job Portal)',
      description: 'A full-stack job portal for job search, application submission, and employer job posting.',
      tech: ['React', 'Node.js','Express','MongoDB', 'Tailwind CSS', 'Cloudinary'],
      image: '🧑‍💻',
      link: 'https://careerconnect-6gf9.onrender.com/',
      github: 'https://github.com/pavanpappala32/CareerConnect',
    },
    {
      id: 3,
      title: 'AI CHAT APP',
      description: 'An AI-powered chat application with dynamic responses and robust error handling.',
      tech: ['React', 'API Integration', 'Node.js', 'NVIDIA AI API','MongoDB'],
      image: '🤖',
      link: 'https://ai-chat-frontend-9doh.onrender.com/',
      github: 'https://github.com/pavanpappala32/ai-chat-app',
    },
    {
      id: 4,
      title: 'CURE BRIDGE',
      description: 'A healthcare platform designed to connect users with medical services and resources.',
      tech: ['React.js', 'Express', 'Node.js', 'MongoDB','Stripe API','Razorpay API'],
      image: '🏥',
      link: 'https://github.com/pavanpappala32/Cure-Bridge',
      github: 'https://github.com/pavanpappala32/Cure-Bridge',
    },
    {
      id: 5,
      title: 'SHOPOSPHERE (E-Commerce Platform)',
      description: 'An e-commerce platform with product listings, cart functionality, and user interaction.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'MongoDB', 'Node.js'],
      image: '🛒',
      link: 'https://github.com/pavanpappala32/ShopoSphere',
      github: 'https://github.com/pavanpappala32/ShopoSphere',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing personal projects and skills.',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
      image: '💼',
      link: '#',
      github: 'https://github.com/pavanpappala32/Portfolio',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured <span className="text-accent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary rounded-xl overflow-hidden border border-accent/20 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 transition transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border-b border-accent/20">
                <span className="text-7xl">{project.image}</span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 px-4 py-2 bg-accent text-primary rounded-lg font-semibold text-center hover:bg-opacity-90 transition text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 border border-accent text-accent rounded-lg font-semibold text-center hover:bg-accent hover:text-primary transition text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
