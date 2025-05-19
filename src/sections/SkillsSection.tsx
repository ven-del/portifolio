import { useState } from 'react';
import { motion } from 'framer-motion';
import TechBadge from '../components/TechBadge';
import { techSkills } from '../data';
import type { TechCategory } from '../types';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory | 'all'>('all');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'web', label: 'Web' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'language', label: 'Linguagens' },
    { id: 'gamedev', label: 'Game Dev' },
    { id: 'version-control', label: 'Controle de Versão' },
    { id: 'os', label: 'Sistemas' },
    { id: 'tool', label: 'Ferramentas' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? techSkills 
    : techSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-black/40 to-black/10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Tecnologias que Utilizo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 text-2xl"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as TechCategory | 'all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-white/20 shadow-lg'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
          {filteredSkills.map((tech, index) => (
            <TechBadge key={tech.id} tech={tech} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;