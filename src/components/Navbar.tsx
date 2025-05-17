import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-md py-2 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="text-2xl font-bold cursor-pointer"
        >
          Wendell Regis
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-2">
            <NavLink to="home" label="Home" closeMenu={closeMenu} />
            <NavLink to="about" label="Sobre" closeMenu={closeMenu} />
            <NavLink to="skills" label="Habilidades" closeMenu={closeMenu} />
            <NavLink to="projects" label="Projetos" closeMenu={closeMenu} />
          </div>
          
          <ThemeSelector />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <NavLink to="home" label="Home" closeMenu={closeMenu} />
            <NavLink to="about" label="Sobre" closeMenu={closeMenu} />
            <NavLink to="skills" label="Habilidades" closeMenu={closeMenu} />
            <NavLink to="projects" label="Projetos" closeMenu={closeMenu} />
            
            <div className="pt-4 border-t border-white/20">
              <ThemeSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  closeMenu: () => void;
}

const NavLink = ({ to, label, closeMenu }: NavLinkProps) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="nav-link"
    activeClass="nav-link-active"
    onClick={closeMenu}
  >
    {label}
  </Link>
);

export default Navbar;