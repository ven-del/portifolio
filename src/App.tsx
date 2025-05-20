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
        <div className="min-h-screen flex flex-col items-center gap-5">
          <Navbar />
          <StarField starCount={200} />
          <main className="overflow-y-auto scrollbar-hide mx-auto w-full max-w-7xl">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
          </main>
          <footer className="py-6 text-center bg-black/10">
            <p>Desenvolvido por Wendell Regis @ Laboratório.CE</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;