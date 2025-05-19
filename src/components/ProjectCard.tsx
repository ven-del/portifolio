import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../types';
import { techSkills } from '../data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getTechIcon = (techId: string) => {
    return techSkills.find(tech => tech.id === techId)?.icon || '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="card card-hover flex flex-col gap-3 w-full max-w-sm mx-auto"
    >
      <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-white/80 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(techId => (
          <div key={techId} className="w-6 h-6">
            <img 
              src={getTechIcon(techId)} 
              alt={techId} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      <div className="flex gap-4 mt-auto">
        <a 
          href={project.projectUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary flex-1"
        >
          <FaExternalLinkAlt /> Ver Projeto
        </a>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <FaGithub />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;