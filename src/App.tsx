import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className='bg-blue-500 text-white p-4'>
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <footer className="py-6 text-center bg-black/30">
          <p>Desenvolvido por Wendell Regis @ Laboratório.CE</p>
          <p className="text-sm mt-2">Acelerado com Amazon Q</p>
        </footer>
      </div>
    </ThemeProvider>
    </div>
  );
}

export default App;
