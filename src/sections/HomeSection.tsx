import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';
import { socialLinks } from '../data';

const HomeSection = () => {
  return (
    <section id="home" className="section-container ">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Wendell Regis</h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/80">
            Desenvolvedor Full Stack
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-lg">
            Olá! Sou Wendell Regis, desenvolvedor Full Stack com especialidade em React, 
            Javascript e NodeJs. Tudo o que vê aqui não passa de espelhos e fumaça. <br></br>
            Quer que eu te ensine o truque?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <SocialLinks links={socialLinks} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <FaChevronDown className="text-2xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
