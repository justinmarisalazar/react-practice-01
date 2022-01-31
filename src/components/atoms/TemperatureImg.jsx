import React from 'react';

import { temperatureImg } from 'assets';

const TemperatureImg = ({ ...props }) => {
  return <img src={temperatureImg} alt='temperature' {...props} />;
};

export default TemperatureImg;
