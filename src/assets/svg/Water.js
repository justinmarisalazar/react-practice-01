import * as React from 'react';

const WaterIcon = (props) => (
  <svg width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15 27.25c5.303 0 9.75-3.967 9.75-9.036 0-3.215-1.677-6.428-3.489-8.988-1.832-2.59-3.915-4.664-4.944-5.63-.745-.7-1.889-.7-2.634 0-1.03.966-3.112 3.04-4.944 5.63-1.812 2.56-3.489 5.773-3.489 8.988 0 5.069 4.447 9.036 9.75 9.036Z'
      stroke='#274C77'
      strokeWidth={2}
    />
    <path d='M15 22.5a5 5 0 0 1-5-5' stroke='#274C77' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

export default WaterIcon;
