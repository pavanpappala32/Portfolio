import React from 'react';

export default function Skills() {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit', 'HTML/CSS'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs'],
    'Tools & Others': ['Git', 'GitHub', 'Render', 'VS Code'],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My <span className="text-accent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-secondary p-8 rounded-xl border border-accent/20 hover:border-accent/50 transition"
            >
              <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
                <span>🛠️</span> {category}
              </h3>
              <ul className="space-y-3">
                {skillList.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { name: 'React & Frontend', level: 95 },
              { name: 'JavaScript/TypeScript', level: 90 },
              { name: 'Backend Development', level: 85 },
              { name: 'Database Design', level: 80 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{item.name}</span>
                  <span className="text-accent font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 border border-accent/20">
                  <div
                    className="bg-gradient-to-r from-accent to-accent/50 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
