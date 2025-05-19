import Navbar from "./components/Navbar";
import "./css/App.css";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import StarField from "./components/StarField";
import useSectionObserver from "./hooks/useSectionObserver";

function App() {
  useSectionObserver();
  return (
    <>
      <div className="text-white p-4">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <StarField starCount={200} />
          <main className="">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
          </main>
          <footer className="py-6 text-center bg-black/10">
            <p>Desenvolvido por Wendell Regis @ Laboratório.CE</p>
            <p className="text-sm mt-2">Acelerado com Amazon Q</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
