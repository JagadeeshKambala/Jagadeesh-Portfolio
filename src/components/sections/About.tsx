import React from 'react';
import { motion } from 'framer-motion';
import { useSectionObserver } from '../../hooks/useSectionObserver';
import { Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const { ref } = useSectionObserver('about');

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      url: 'mailto:john.doe@example.com',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative w-[5cm] h-[5cm] mx-auto">
                <div className="w-full h-full absolute -top-3 -left-3 border-2 border-primary-500 rounded-full"></div>
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Professional portrait"
                  className="w-full h-full object-cover rounded-full relative z-10 shadow-lg"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  John Doe
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full Stack Developer
                </p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Hello! I'm Jagadeesh, a Frontend Developer, UI/UX Designer and Python Programmer. I have a strong foundation in JavaScript, React, TypeScript, Python with DSA with a passion for building responsive and user-centered web applications.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                My journey in web development began during my time at university, where I discovered my love for turning ideas into functional and beautiful digital experiences. Since then, I've been constantly learning and growing, staying up-to-date with the latest technologies and best practices.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, attending tech meetups, and exploring the outdoors. I approach each project with dedication, attention to detail, and a commitment to writing clean, efficient, and maintainable code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;