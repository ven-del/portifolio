import { FaLinkedin, FaGithub, FaFile } from 'react-icons/fa';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <FaLinkedin />;
      case 'github':
        return <FaGithub />;
      case 'file':
        return <FaFile />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {links.map(link => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {getIcon(link.icon)}
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;