import { Button, styled } from '@mui/material';
import React from 'react';

const TabButton = ({ children, active, ...otherProps }) => {
  // style
  const CustomizedButton = styled(Button, {
    name: 'CustomizedButton',
    slot: 'Root',
  })(() => ({
    textTransform: 'none',
    borderRadius: '9px',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '6px 8px',
  }));

  // config
  const configButton = {
    ...otherProps,
    color: active ? 'custom' : 'secondary',
    fullWidth: true,
    variant: active ? 'contained' : 'text',
    disableElevation: true,
    sx: active ? { backgroundColor: 'rgba(81, 111, 145, 0.25)' } : { color: '#516F91' },
  };

  // render
  return <CustomizedButton {...configButton}>{children}</CustomizedButton>;
};

export default TabButton;
