import { useState } from 'react';
import { FaPalette } from 'react-icons/fa';
import { themeOptions } from '../data';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button 
        onClick={toggleOpen}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Selecionar tema"
      >
        <FaPalette />
        <span className="hidden sm:inline">Tema</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-md rounded-md shadow-lg p-2 animate-fade-in z-50">
          {themeOptions.map(theme => (
            <button
              key={theme.id}
              onClick={() => {
                setTheme(theme.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                currentTheme === theme.id ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${theme.secondaryClass}`} />
                <span>{theme.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;