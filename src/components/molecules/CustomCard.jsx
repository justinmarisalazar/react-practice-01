import { Card, IconButton, styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import {
  CustomSwitch,
  CustomTab,
  Notification,
  QuickPanelItem,
  StatsImg,
  TemperatureImg,
  WeatherImg,
} from 'components';

const CustomCard = ({ type, ...otherProps }) => {
  // style
  const CustomizedCard = styled(Card, {
    name: 'CustomizedCard',
    slot: 'Root',
  })(() => ({
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 24px 48px -8px #274C7729',
  }));
  const Label = styled('span', {
    name: 'Label',
    slot: 'Root',
  })(() => ({
    fontSize: '18px',
    fontWeight: 'bold',
  }));
  const Bold = styled('span', {
    name: 'Bold',
    slot: 'Root',
  })(() => ({
    fontWeight: 'bold',
    color: '#516F91',
  }));

  // config
  let label, content;
  switch (type) {
    case 'weather':
      label = 'Weather';
      content = (
        <Box display='flex' justifyContent='space-between'>
          <Box display='flex' flexDirection='column' sx={{ gap: 1 }}>
            <Box sx={{ fontSize: '16px', color: 'text.secondary' }}>Rasht</Box>
            <Box sx={{ fontSize: '24px', fontWeight: 'bold', color: 'text.secondary' }}>14°C</Box>
            <Box sx={{ fontSize: '16px', color: 'text.secondary' }}>
              <span style={{ color: '#00B2FF' }}>3°C</span> / <span style={{ color: '#FF7A00' }}>16°C</span>
            </Box>
            <Box sx={{ fontSize: '14px', color: 'text.light' }}>Partly Cloudy</Box>
          </Box>
          <Box>
            <WeatherImg />
          </Box>
        </Box>
      );
      break;
    case 'temperature':
      label = 'Temperature';
      content = (
        <Box display='flex' flexDirection='column'>
          <Box display='flex' justifyContent='space-between' mb={1}>
            <Box display='flex' alignItems='center'>
              <TemperatureImg style={{ marginRight: '10px' }} />
              <span style={{ fontSize: '40px', color: 'text.secondary' }}>19°C</span>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='space-evenly' mr={1}>
              <IconButton sx={{ width: '32px', height: '32px' }}>
                <ArrowDropUpIcon fontSize='large' sx={{ color: 'text.light' }} />
              </IconButton>
              <IconButton sx={{ width: '32px', height: '32px' }}>
                <ArrowDropDownIcon fontSize='large' sx={{ color: 'text.light' }} />
              </IconButton>
            </Box>
          </Box>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box sx={{ fontSize: '14px', color: 'text.light' }}>Auto Room Temperature System</Box>
            <CustomSwitch defaultChecked />
          </Box>
        </Box>
      );
      break;
    case 'wi-fi':
      label = 'Wi-Fi';
      content = (
        <Box display='flex' flexDirection='column' justifyContent='space-between' sx={{ gap: 2 }}>
          <Bold style={{ color: '#516F91', fontSize: '18px' }}>Connected</Bold>
          <span style={{ fontSize: '18px', color: '#879CB3' }}>
            <Bold>4</Bold>
            {` Connected devices`}
          </span>
          <Box display='flex' justifyContent='space-between'>
            <span style={{ fontSize: '16px', color: '#879CB3' }}>
              <Bold>12.54</Bold>
              {` GB `}
              <span style={{ color: '#9B4343' }}>sent</span>
            </span>
            <span style={{ fontSize: '16px', color: '#879CB3' }}>
              <Bold>6.48</Bold>
              {` GB `}
              <span style={{ color: '#439B57' }}>received</span>
            </span>
          </Box>
        </Box>
      );
      break;
    case 'electricity':
      label = 'Electricity';
      content = (
        <Box display='flex' flexDirection='column' alignItems='center' sx={{ gap: 2 }}>
          <CustomTab />
          <StatsImg />
        </Box>
      );
      break;
    case 'notifications':
      label = 'Notifications';
      content = (
        <Box display='flex' flexDirection='column' mt={1}>
          <Notification severity='emergency' time='5 min ago'>
            Possible raining in 14:30
          </Notification>
          <Notification severity='normal' time='12 min ago'>
            New message from Boss
          </Notification>
          <Notification severity='normal' time='16 min ago'>
            Your food will arrive in 20 minutes
          </Notification>
        </Box>
      );
      break;
    case 'quick-panel':
      label = 'Quick Panel';
      content = (
        <Box display='flex' flexDirection='column' mt={3} sx={{ gap: 3 }}>
          <QuickPanelItem type='lights' defaultChecked>
            Lights
          </QuickPanelItem>
          <QuickPanelItem type='music'>Music</QuickPanelItem>
          <QuickPanelItem type='wi-fi' defaultChecked>
            Wi-Fi
          </QuickPanelItem>
          <QuickPanelItem type='cctv' defaultChecked>
            CCTV Cam
          </QuickPanelItem>
          <QuickPanelItem type='door' defaultChecked>
            Door Lock
          </QuickPanelItem>
        </Box>
      );
      break;
    default:
      break;
  }

  // render
  return (
    <CustomizedCard elevation={0} {...otherProps}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Label>{label}</Label>
        <IconButton size='small' sx={{ color: 'text.light', display: type === 'quick-panel' && 'none' }}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
      {content}
    </CustomizedCard>
  );
};

export default CustomCard;
