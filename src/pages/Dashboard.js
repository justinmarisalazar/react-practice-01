import React, { Fragment } from 'react';

import { Header, MainNavigation, CustomCard, MovieCard } from 'components';
import { Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Fragment>
      <Header />
      <Box display='flex' mb={8}>
        <MainNavigation mr={8} />
        <Box width='100%' display='flex' flexDirection='column' sx={{ gap: 7 }}>
          <Box width='100%' height='fit-content' display='flex' sx={{ gap: 8 }}>
            <Box flex={1}>
              <CustomCard type='weather' sx={{ height: 'calc(100% - 40px)' }} />
            </Box>
            <Box flex={1}>
              <CustomCard type='temperature' sx={{ height: 'calc(100% - 40px)' }} />
            </Box>
          </Box>
          <Box width='100%' height='fit-content' display='flex' sx={{ gap: 8 }}>
            <Box flex={1}>
              <CustomCard type='wi-fi' sx={{ height: 'calc(100% - 40px)' }} />
            </Box>
            <Box flex={1}>
              <CustomCard type='electricity' sx={{ height: 'calc(100% - 40px)' }} />
            </Box>
          </Box>
          <Box>
            <MovieCard />
          </Box>
        </Box>
        <Box mr='64px' ml={8} display='flex' flexDirection='column' sx={{ gap: 7 }}>
          <CustomCard type='notifications' sx={{ width: '250px' }} />
          <CustomCard type='quick-panel' sx={{ width: '250px' }} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Dashboard;
