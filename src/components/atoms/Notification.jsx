import { Box, styled } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

const Notification = ({ severity, children, time }) => {
  // style
  const Description = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary,
  }));
  const Time = styled('span')(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.text.light,
  }));

  // render
  return (
    <Box display='flex' my={1}>
      <Box sx={{ width: '32px' }} display='flex' alignItems='flex-start'>
        <CircleIcon
          sx={{ fontSize: '12px', padding: '4px 0', color: severity === 'emergency' ? '#9B4343' : '#439B57' }}
        />
      </Box>
      <Box display='flex' flexDirection='column'>
        <Description>{children}</Description>
        <Time>{time}</Time>
      </Box>
    </Box>
  );
};

export default Notification;
