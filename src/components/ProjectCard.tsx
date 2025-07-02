import { Github, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  technologies: string[];
  color: string;
  githubLink?: string;
  liveLink?: string;
}

export function ProjectCard({ title, subtitle, technologies, color, githubLink, liveLink }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`aspect-square p-8 rounded-lg relative group overflow-hidden ${color}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute top-4 right-4 flex gap-2"
        animate={{ opacity: isHovered ? 1 : 0.7 }}
      >
        {githubLink && (
          <motion.a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black/70 hover:text-black transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
          >
            <Github size={20} />
          </motion.a>
        )}
        {liveLink && (
          <motion.a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black/70 hover:text-black transition-colors"
            whileHover={{ scale: 1.2, rotate: 360 }}
          >
            <LinkIcon size={20} />
          </motion.a>
        )}
      </motion.div>

      <motion.div 
        className="h-full flex flex-col"
        animate={{ y: isHovered ? -10 : 0 }}
      >
        <div className="flex-grow" />
        <div>
          <motion.h3 
            className="text-3xl font-bold mb-1"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          >
            {title}
          </motion.h3>
          <motion.h4 
            className="text-3xl font-bold mb-6"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          >
            {subtitle}
          </motion.h4>
          <motion.div 
            className="flex gap-4"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {technologies.map((tech) => (
              <motion.span 
                key={tech} 
                className="text-xs tracking-wider"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}