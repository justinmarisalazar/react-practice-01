import { Button, styled } from '@mui/material';
import React from 'react';

const NavigationButton = ({ children, active, ...otherProps }) => {
  // style
  const CustomizedButton = styled(Button, {
    name: 'CustomizedButton',
    slot: 'Root',
  })(() => ({
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'none',
    height: '62px',
    borderRadius: '0 20px 20px 0',
    justifyContent: 'start',
    padding: '0 64px',
    width: '314px',
    '& .MuiButton-startIcon': {
      marginRight: '20px',
    },
  }));

  // config
  const configButton = {
    ...otherProps,
    variant: active ? 'contained' : 'text',
    disableElevation: true,
  };

  // render
  return <CustomizedButton {...configButton}>{children}</CustomizedButton>;
};

export default NavigationButton;
