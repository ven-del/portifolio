import { useEffect } from 'react';

const useSectionObserver = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger earlier for smoother transitions
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add visible class to current section
          entry.target.classList.add('visible');
          
          // Add active class for additional styling
          entry.target.classList.add('active-section');
          
          // Remove active class from other sections
          document.querySelectorAll('section.active-section').forEach(section => {
            if (section !== entry.target) {
              section.classList.remove('active-section');
              
              // Add exiting class for fade-out animation
              section.classList.add('exiting');
              
              // Remove exiting class after animation completes
              setTimeout(() => {
                section.classList.remove('exiting');
              }, 1000);
            }
          });
        } else {
          // Only remove visible class when scrolling away
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
};

export default useSectionObserver;