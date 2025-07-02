import { Folder } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Weather',
      subtitle: 'App.',
      technologies: ['API', 'HTML/CSS', 'JS'],
      color: 'bg-gradient-to-br from-[#ffddc9] to-[#ffe8dc]',
      githubLink: 'https://github.com/rpraneeth5225/Weather-App',
      liveLink: 'https://weather-app-ten-coral-63.vercel.app/'
    },
    {
      title: 'Personal ',
      subtitle: 'Portfolio.',
      technologies: ['JS', 'REACT', 'TS'],
      color: 'bg-gradient-to-br from-[#c9e7ff] to-[#f2e3ff]',
      githubLink: 'https://github.com/rpraneeth5225',
      liveLink: 'https://praneeth-dev-portfolio.vercel.app/'
    },
    {
      title: 'Craigslist',
      subtitle: 'Redesigned.',
      technologies: ['HTML/CSS', 'JS', 'TS','REACT'],
      color: 'bg-gradient-to-br from-[#e3c9ff] to-[#ffe3f6]',
      githubLink: 'https://github.com/rpraneeth5225/Craigslist-Redesigned-Project',
      liveLink: 'https://craigslist-redesigned.vercel.app/'
    },
    {
      title: 'Modern Trendy',
      subtitle: 'Store.',
      technologies: ['E-COM', 'REACT'],
      color: 'bg-gradient-to-br from-[#ffcdb0] to-[#ffc4e4]',
      githubLink: 'https://github.com',
      liveLink: 'https://moderntrendystore.com'
    },
    {
      title: 'Expense',
      subtitle: 'Tracker.',
      technologies: ['JS', 'TS','REACT'],
      color: 'bg-gradient-to-br from-[#b0e5ff] to-[#e7c4ff]',
      githubLink: 'https://github.com/rpraneeth5225/Expense-Tracker-MERN',
      liveLink: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="bg-black text-black py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-white text-sm tracking-widest">FEATURED PROJECTS —</h2>
          <h2 className="text-white text-sm tracking-widest flex items-center gap-2">
            Stuff I've Worked On <Folder size={16} />
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}