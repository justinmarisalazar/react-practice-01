import { Box } from '@mui/material';
import {
  DashboardIcon,
  DevicesIcon,
  ElectricityIcon,
  LightsIcon,
  SecurityIcon,
  TemperatureIcon,
  WaterIcon,
  WiFiIcon,
} from 'assets';
import { NavigationButton } from 'components';
import React from 'react';

const MainNavigation = ({ ...otherProps }) => {
  return (
    <Box display='flex' flexDirection='column' sx={{ gap: 2 }} {...otherProps}>
      <NavigationButton startIcon={<DashboardIcon />} color='secondary' active>
        Dashboard
      </NavigationButton>
      <NavigationButton startIcon={<DevicesIcon />} color='secondary'>
        Devices
      </NavigationButton>
      <NavigationButton startIcon={<LightsIcon />} color='secondary'>
        Lights
      </NavigationButton>
      <NavigationButton startIcon={<TemperatureIcon />} color='secondary'>
        Temperature
      </NavigationButton>
      <NavigationButton startIcon={<ElectricityIcon />} color='secondary'>
        Electricity
      </NavigationButton>
      <NavigationButton startIcon={<WaterIcon />} color='secondary'>
        Water
      </NavigationButton>
      <NavigationButton startIcon={<WiFiIcon />} color='secondary'>
        Wi-Fi
      </NavigationButton>
      <NavigationButton startIcon={<SecurityIcon />} color='secondary'>
        Security
      </NavigationButton>
    </Box>
  );
};

export default MainNavigation;
