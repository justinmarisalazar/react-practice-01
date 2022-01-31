import { styled, Switch } from '@mui/material';
import React from 'react';

const CustomSwitch = ({ ...props }) => {
  // style
  const CustomizedSwitch = styled(Switch, {
    name: 'CustomizedSwitch',
    slot: 'Root',
  })(({ theme }) => ({
    '&.MuiSwitch-root': {
      padding: 0,
      width: '42px',
      height: '21px',
      '& .MuiSwitch-switchBase': {
        padding: '0',
        top: '3px',
        left: '3px',
        ':hover': {
          backgroundColor: 'transparent',
        },
        '& .MuiSwitch-input': {
          width: '400%',
          left: '-150%',
        },
        '& .MuiSwitch-thumb': {
          width: '15px',
          height: '15px',
          color: theme.palette.primary.light,
          boxShadow: 'none',
        },
      },
      '& .MuiSwitch-track': {
        borderRadius: '12px',
        opacity: 0.4,
        backgroundColor: theme.palette.text.light,
      },
      '& .Mui-checked+': {
        '& .MuiSwitch-track': {
          backgroundColor: theme.palette.text.secondary,
          opacity: 1,
        },
      },
    },
  }));

  // render
  return <CustomizedSwitch disableRipple {...props} />;
};

export default CustomSwitch;
