import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Github as GitHub, Linkedin, Mail, Moon, Sun } from 'lucide-react';

const SocialButtons: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/jagadeesh-kambala-34a93732b/',
      ariaLabel: 'LinkedIn Profile',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:kambala.jagadeesh19@gmail.com',
      ariaLabel: 'Send Email',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label={link.ariaLabel}
        >
          {link.icon}
        </a>
      ))}
      
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default SocialButtons;