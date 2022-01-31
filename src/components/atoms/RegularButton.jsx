import { Button, styled } from '@mui/material';
import React from 'react';

const RegularButton = ({ children, ...otherProps }) => {
  // style
  const CustomizedButton = styled(Button, {
    name: 'CustomizedButton',
    slot: 'Root',
  })(() => ({
    textTransform: 'none',
    fontSize: '18px',
    borderRadius: '10px',
  }));

  // render
  return <CustomizedButton {...otherProps}>{children}</CustomizedButton>;
};

export default RegularButton;
