import { useEffect, useRef } from "react";

interface StarFieldProps {
  starCount?: number;
}

const StarField = ({ starCount = 150 }: StarFieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Clear any existing stars
    container.innerHTML = "";

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star star-twinkle";

      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;

      // Random size (1-3px)
      const size = Math.random() * 2 + 1;

      // Random opacity range
      const minOpacity = Math.random() * 0.2;
      const maxOpacity = minOpacity + Math.random() * 0.5 + 0.2;

      // Random animation duration (3-8s for more subtle effect)
      const duration = Math.random() * 5 + 3;

      // Random animation delay
      const delay = Math.random() * 10;

      // Apply styles
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty("--min-opacity", minOpacity.toString());
      star.style.setProperty("--max-opacity", maxOpacity.toString());
      star.style.setProperty("--duration", `${duration}s`);
      star.style.animationDelay = `${delay}s`;

      container.appendChild(star);
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      container.innerHTML = "";

      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star star-twinkle";

        const x = Math.random() * newWidth;
        const y = Math.random() * newHeight;
        const size = Math.random() * 2 + 1;
        const minOpacity = Math.random() * 0.2;
        const maxOpacity = minOpacity + Math.random() * 0.5 + 0.2;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 10;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty("--min-opacity", minOpacity.toString());
        star.style.setProperty("--max-opacity", maxOpacity.toString());
        star.style.setProperty("--duration", `${duration}s`);
        star.style.animationDelay = `${delay}s`;

        container.appendChild(star);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [starCount]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

export default StarField;
