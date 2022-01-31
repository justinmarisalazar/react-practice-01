import * as React from 'react';

const DashboardIcon = (props) => (
  <svg width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.25 15.95c0-1.698 0-2.546.343-3.292s.987-1.298 2.276-2.403l1.25-1.071C12.45 7.187 13.613 6.189 15 6.189s2.552.998 4.88 2.995l1.25 1.071c1.29 1.105 1.934 1.657 2.277 2.403.343.746.343 1.594.343 3.292v5.3c0 2.357 0 3.535-.732 4.268-.733.732-1.911.732-4.268.732h-7.5c-2.357 0-3.536 0-4.268-.732-.732-.733-.732-1.911-.732-4.268v-5.3Z'
      stroke='#E7ECEF'
      strokeWidth={2}
    />
    <path
      d='M18.125 26.25v-6.5a1 1 0 0 0-1-1h-4.25a1 1 0 0 0-1 1v6.5'
      stroke='#E7ECEF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default DashboardIcon;
