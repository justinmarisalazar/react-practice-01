import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button, styled } from '@mui/material';

import picture from 'assets/img/picture.jfif';

const ProfileButton = ({ children, ...otherProps }) => {
  // style
  const CustomizedButton = styled(Button, {
    name: 'CustomizedButton',
    slot: 'Root',
  })(() => ({
    textTransform: 'none',
    fontSize: '18px',
  }));

  // config
  const configButton = {
    ...otherProps,
    color: 'secondary',
    startIcon: <ExpandMoreIcon />,
    endIcon: <Avatar sx={{ height: '35px', width: '35px', ml: 1 }} src={picture} />,
  };

  // render
  return <CustomizedButton {...configButton}>{children}</CustomizedButton>;
};

export default ProfileButton;
