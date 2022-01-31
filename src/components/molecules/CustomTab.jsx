import { Box, styled } from '@mui/material';
import { TabButton } from 'components';
import React, { useState } from 'react';

const CustomTab = () => {
  // style
  const CustomizedBox = styled(Box, {
    name: 'CustomizedBox',
    slot: 'Root',
  })(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '29px',
    width: '100%',
    borderRadius: '9px',
    display: 'flex',
    justifyContent: 'space-evenly',
  }));

  // config
  const [isDaily, setIsDaily] = useState(true);

  // render
  return (
    <CustomizedBox>
      <TabButton active={isDaily} onClick={() => setIsDaily(true)}>
        Daily
      </TabButton>
      <TabButton active={!isDaily} onClick={() => setIsDaily(false)}>
        Weekly
      </TabButton>
    </CustomizedBox>
  );
};

export default CustomTab;
