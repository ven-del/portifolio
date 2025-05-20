import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="container flex flex-col justify-center items-center gap-8 w-full px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          className="section-title"
        >
          Meus Projetos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px 0px" }}
          className="text-center max-w-2xl mx-auto mb-8 text-white/80"
        >
          Confira alguns dos meus projetos em destaque. Cada projeto representa
          uma oportunidade de aprendizado e aplicação de diferentes tecnologias.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full overflow-visible pt-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;