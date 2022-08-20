import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Grid)({
  transition: 'all 0.2s ease-out',
  cursor: 'pointer',
  height: '100%',
//   overflow: 'hidden',
//   whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
//   width: '300px',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
});
