import { styled } from '@/styles';

export const SocialIconsList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

export const SocialIconsItem = styled('li', {});

export const SocialIconsLink = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease',
  borderRadius: '$default',

  svg: {
    color: '$slate12',
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    backgroundColor: '$slate6',
  },

  '@sm': {
    svg: {
      width: '$3',
      height: '$3',
    },
  },
});
