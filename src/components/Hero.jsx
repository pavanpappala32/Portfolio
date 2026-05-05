import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-secondary to-primary px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse">
          Hi, I'm <span className="text-accent">Pavan</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full-Stack Developer |MERN STACK | Problem Solver
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          I create beautiful, functional web experiences using modern technologies. 
          Let's build something amazing together!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-primary rounded-lg font-bold hover:bg-opacity-90 transition transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-bold hover:bg-accent hover:text-primary transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
