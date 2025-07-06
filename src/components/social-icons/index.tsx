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
    icon: SiLinkedin,
    link: 'https://www.linkedin.com/in/yuri-mutti-0418bb1aa',
  },
  {
    name: 'github',
    icon: SiGithub,
    link: 'https://github.com/yurimutti',
  },
  {
    name: 'youtube',
    icon: SiYoutube,
    link: 'https://www.youtube.com/@muttiyuri',
  },
  {
    name: 'twitter',
    icon: SiTwitter,
    link: 'https://twitter.com/muttiyuri',
  },
  {
    name: 'instagram',
    icon: SiInstagram,
    link: 'https://www.instagram.com/yurimutti',
  },
];

export const SocialIcons = () => {
  const [hovered, setHovered] = useState('');

  return (
    <motion.ul className="flex items-center gap-3">
      {socialNetworks.map(({ name, icon: Icon, link }) => {
        const isHovered = hovered === name;

        return (
          <li key={name} className="relative">
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered('')}
              className={`
                relative z-10 flex items-center justify-center w-10 h-10 p-2 rounded-md
                transition-colors duration-300
                hover:bg-[hsl(var(--accent)/0.15)]
              `}
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
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-md -z-10"
                    style={{ backgroundColor: 'hsl(var(--accent) / 0.15)' }}
                  />
                )}
              </AnimatePresence>

              <Icon className="w-6 h-6" />
            </motion.a>
          </li>
        );
      })}
    </motion.ul>
  );
};
