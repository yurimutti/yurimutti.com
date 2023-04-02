import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { styled } from '@/styles';
import { darkTheme } from '@/styles/global';

export const ToggleLang = styled('div', {
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
    border: '1px solid $slate12',
  },

  [`.${darkTheme} &`]: {
    svg: {
      color: '$slate1',
    },
  },
});

export const DropdownMenuTriggerStyled = styled(DropdownMenu.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$slate12',
  padding: '$2',
  height: '40px',
  transition: 'all $durations ease',

  [`.${darkTheme} &`]: {
    color: '$slate1',
  },
});

export const DropdownMenuContentStyled = styled(DropdownMenu.Content, {
  borderRadius: '$default',
  backgroundColor: '$slate4',
  padding: '$2',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export const DropdownMenuItemStyled = styled(DropdownMenu.Item, {
  cursor: 'pointer',
  color: '$slate12',
  outline: 'none',
  padding: '$2',
  borderRadius: '$default',

  '&:hover': {
    color: '$slate12',
    backgroundColor: '$slate6',
  },

  [`.${darkTheme} &`]: {
    svg: {
      color: '$slate1',
    },
  },
});
