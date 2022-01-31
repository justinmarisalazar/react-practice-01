import { AppBar, Box, IconButton, styled } from '@mui/material';
import React, { useState } from 'react';

import { ProfileButton, RegularButton } from 'components';
import { toCustomDate } from 'helpers/date';
import { SignOutIcon } from 'assets';

const Header = () => {
  // style
  const CustomizedAppBar = styled(AppBar, {
    name: 'CustomizedAppBar',
    slot: 'Root',
  })(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '64px',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0px 4px 4px 0px #00000040',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 64px',
    fontSize: '18px',
    lineHeight: '22px',
  }));

  // config
  const [
    time,
    //setTime
  ] = useState(new Date().toLocaleTimeString());
  // setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  const date = toCustomDate(new Date());

  // render
  return (
    <CustomizedAppBar position='static' sx={{ mb: 7 }}>
      <Box>
        <span style={{ fontWeight: 'bold', paddingRight: '92px' }}>MetaHome</span>
        <span style={{ paddingRight: '25px' }}>{time}</span>
        <span>{date}</span>
      </Box>
      <Box>
        <RegularButton color='secondary' sx={{ mr: '40px' }}>
          Customize Dashboard
        </RegularButton>
        <ProfileButton sx={{ mr: '40px' }}>
          {`Hello `}
          <strong style={{ paddingLeft: '4px' }}>{`Iman`}</strong>
        </ProfileButton>
        <IconButton color='secondary'>
          <SignOutIcon />
        </IconButton>
      </Box>
    </CustomizedAppBar>
  );
};

export default Header;
