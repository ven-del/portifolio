import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="container flex flex-col gap-8 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Sobre Mim
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="card text-justify p-6 md:p-8">
              <div className="max-h-[300px] sm:max-h-none overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <p className="mb-4 text-center">
                  Olá!<br></br>
                  <br></br>
                </p>
                <p className='mb-4'>
                  Sou Wendell Régis, profissional de tecnologia com
                  trajetória iniciada no suporte técnico e evoluindo para áreas
                  como IAM, segurança da informação e, agora, desenvolvimento web.
                </p>
                <p className="mb-4">
                  Sou graduado em Análise e Desenvolvimento de Sistemas pela
                  Unifor e atualmente estudo desenvolvimento full stack com foco
                  em React, Node.js, TypeScript e Tailwind na Digital College
                  através do projeto Geração Tech 2.0.
                </p>
                <p className="mb-4">
                  Apaixonado por tecnologia desde cedo, encontrei no
                  desenvolvimento de jogos uma forma criativa de unir lógica, arte
                  e propósito. No meu GitHub, compartilho experimentos e projetos.
                </p>
                <p className="mb-4">
                  Além do código, também gosto de estudar sobre tecnologia. Quando
                  não estou estudando, gosto de passar meu tempo jogando algum
                  jogo.
                </p>
                <p>
                  Estou em constante aprendizado e cada linha de código escrita é
                  um passo a mais nessa jornada que une técnica, curiosidade e
                  vontade de construir soluções que façam a diferença.
                </p>
              </div>
            </div>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;