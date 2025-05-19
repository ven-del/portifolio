import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-black/30">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Sobre Mim
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="card p-6 md:p-8">
              <p className="mb-4">
                Olá! Sou Wendell Régis, um profissional de tecnologia com trajetória iniciada no suporte técnico e evoluindo para áreas como IAM, segurança da informação e, agora, desenvolvimento web. Sou graduado em Análise e Desenvolvimento de Sistemas pela Unifor e atualmente estudo desenvolvimento full stack com foco em React, Node.js, TypeScript e Tailwind na Digital College através do projeto Geração Tech 2.0.
              </p>
              <p className="mb-4">
                Apaixonado por tecnologia desde cedo, encontrei no desenvolvimento de jogos uma forma criativa de unir lógica, arte e propósito. No meu GitHub, compartilho experimentos e projetos — incluindo um protótipo de jogo feito com Unity e Android Studio, que representa meus primeiros passos práticos na área de games.
              </p>
              <p>
                Estou em constante aprendizado e cada linha de código escrita é um passo a mais nessa jornada que une técnica, curiosidade e vontade de construir soluções que façam a diferença.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
              <img
                src="src\assets\images\pfp5.jpg"
                alt="Wendell Regis"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[var(--primary-light)] opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
