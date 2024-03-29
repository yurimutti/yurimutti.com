import { motion } from 'framer-motion';

import { styled } from '@/libs/stitches';

export const SocialIconsList = styled(motion.ul, {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

export const SocialIconsItem = styled('li', {});

export const SocialIconsLink = styled(motion.a, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease',
  borderRadius: '$default',
  position: 'relative',
  zIndex: 1,

  svg: {
    color: '$slate1',
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    backgroundColor: '$slate6',

    svg: {
      color: '$slate12',
    },
  },

  '@sm': {
    svg: {
      width: '$3',
      height: '$3',
    },
  },

  '.dark &': {
    svg: {
      color: '$slate12',
    },
  },
});

export const SocialIconsHovered = styled(motion.span, {
  position: 'absolute',
  inset: 0,
  backgroundColor: '$slate6',
  borderRadius: '$default',
  zIndex: -1,
});
