import { motion } from 'framer-motion';
import type { TechSkill } from '../types';

interface TechBadgeProps {
  tech: TechSkill;
  index: number;
}

const TechBadge = ({ tech, index }: TechBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="tech-badge tech-badge-shine"
    >
      <img 
        src={tech.icon} 
        alt={tech.name} 
        className="w-full h-full object-contain " 
      />
      <span className="sr-only">{tech.name}</span>
    </motion.div>
  );
};

export default TechBadge;