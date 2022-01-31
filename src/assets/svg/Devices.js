import * as React from 'react';

const DevicesIcon = (props) => (
  <svg width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.5 5V4h-7v1.29c0 .2 0 .437.027.642.033.247.122.589.412.879.29.29.632.379.88.412.204.027.442.027.642.027h3.079c.2 0 .437 0 .642-.027.247-.033.589-.122.879-.412.29-.29.379-.632.412-.88.027-.204.027-.442.027-.642V5Z'
      stroke='#274C77'
      strokeWidth={2}
    />
    <rect x={8.5} y={3.5} width={13} height={23} rx={1} stroke='#274C77' strokeWidth={2} />
    <circle cx={15} cy={22.5} r={1.25} fill='#274C77' />
  </svg>
);

export default DevicesIcon;
