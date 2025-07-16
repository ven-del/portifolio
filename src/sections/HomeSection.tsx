import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import { socialLinks } from '../data';
import profilePicture from "../assets/images/pfp5.jpg";

const HomeSection = () => {
  return (
    <section id="home" className="section-container">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-center text-center gap-5">
        <div className='flex flex-col gap-8'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">Wendell Pereira</h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-white/80">
              Desenvolvedor Full Stack
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-base sm:text-lg">
              Olá! Sou Wendell Pereira, desenvolvedor Full Stack com especialidade em React,
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center mb-6 sm:mb-0"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
            <img
              src={profilePicture}
              alt="Wendell Regis"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;