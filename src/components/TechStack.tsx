import { useState } from 'react';
import { motion } from 'framer-motion';


interface Technology {
  name: string;
  icon: string;
}

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies: Technology[] = [
    {
      name: 'VSCode',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    // {
    //   name: 'Tailwind',
    //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    // },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'NPM',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    // {
    //   name: 'Express',
    //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    // },
    {
      name: 'Threejs',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKX_s-sa1eXCWIwO1Lmuf7kdFsTNNh1ud5apvEzhL59O5ap2KyhjbYLHsYzKllStFqM0k&usqp=CAU',
      
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    }
  ];

  return (
    <motion.section 
      className="py-8 bg-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-white/70 text-sm tracking-widest mb-8">TECH STACK —</h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 md:gap-8">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="group relative flex flex-col items-center"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-8 h-8 md:w-12 md:h-12">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-125"
                  style={{
                    filter: hoveredTech && hoveredTech !== tech.name ? 'grayscale(100%) opacity(30%)' : 'none'
                  }}
                />
              </div>
              <span className="absolute -bottom-6 text-[10px] md:text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}