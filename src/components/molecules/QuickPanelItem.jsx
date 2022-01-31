import { Box, styled } from '@mui/material';
import { Cctv, Door, Lights, Music, WiFi } from 'assets/svg/quick-panel';
import { CustomSwitch } from 'components';
import React from 'react';

const QuickPanelItem = ({ type, children, defaultChecked }) => {
  // style
  const CustomizedBox = styled(Box, {
    name: 'CustomizedBox',
    slot: 'Root',
  })(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    color: theme.palette.text.secondary,
  }));

  // config
  let icon;
  switch (type) {
    case 'lights':
      icon = <Lights />;
      break;
    case 'music':
      icon = <Music />;
      break;
    case 'wi-fi':
      icon = <WiFi />;
      break;
    case 'cctv':
      icon = <Cctv />;
      break;
    case 'door':
      icon = <Door />;
      break;
    default:
      break;
  }

  // render
  return (
    <CustomizedBox>
      <Box display='flex' alignItems='center' sx={{ gap: 1 }}>
        {icon}
        {children}
      </Box>
      <CustomSwitch defaultChecked={defaultChecked} />
    </CustomizedBox>
  );
};

export default QuickPanelItem;
