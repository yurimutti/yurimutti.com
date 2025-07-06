'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiGithub,
  SiTwitter,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
} from 'react-icons/si';

const socialNetworks = [
  {
    name: 'linkedin',
    icon: <SiLinkedin className="w-6 h-6" />,
    link: 'https://www.linkedin.com/in/yuri-mutti-0418bb1aa',
  },
  {
    name: 'github',
    icon: <SiGithub className="w-6 h-6" />,
    link: 'https://github.com/yurimutti',
  },
  {
    name: 'youtube',
    icon: <SiYoutube className="w-6 h-6" />,
    link: 'https://www.youtube.com/@muttiyuri',
  },
  {
    name: 'twitter',
    icon: <SiTwitter className="w-6 h-6" />,
    link: 'https://twitter.com/muttiyuri',
  },
  {
    name: 'instagram',
    icon: <SiInstagram className="w-6 h-6" />,
    link: 'https://www.instagram.com/yurimutti',
  },
];

export const SocialIcons = () => {
  const [hovered, setHovered] = useState('');

  return (
    <motion.ul className="flex items-center gap-4">
      {socialNetworks.map(({ name, icon, link }) => {
        const isHovered = hovered === name;

        return (
          <li key={name} className="relative">
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered('')}
              className="relative z-10 flex items-center justify-center w-10 h-10 gap-2 transition-colors duration-300 bg-transparent"
              initial={false}
              whileHover={{}}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    key="hover-bg"
                    layoutId="hover-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-md bg-slate-400 -z-10"
                  />
                )}
              </AnimatePresence>

              <span
                className={`transition-colors duration-300 text-slate-100 dark:text-slate-100 ${
                  isHovered ? 'text-slate-900 dark:text-slate-900' : ''
                }`}
              >
                {icon}
              </span>
            </motion.a>
          </li>
        );
      })}
    </motion.ul>
  );
};
