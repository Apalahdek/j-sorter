import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="h6" color="primary" align="center" sx={{textTransform:'uppercase', fontSize: '1.2rem', fontWeight: 600}}>
      Copyright © {new Date().getFullYear()},{' '}
      <MuiLink color="inherit" href="https://live.valzyofc.my.id" target="_blank" rel="noopener noreferrer">
       JKTConnect48
      </MuiLink>
    </Typography>
  );
}
