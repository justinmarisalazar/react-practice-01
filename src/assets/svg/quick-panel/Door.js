import * as React from "react";

const SvgDoor = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 15.25c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586h12c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v5c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879h-8c-2.828 0-4.243 0-5.121-.879C5 24.493 5 23.078 5 20.25v-5Z"
      stroke="#516F91"
      strokeWidth={2}
    />
    <path
      d="M20 10V8.75a5 5 0 0 0-5-5v0a5 5 0 0 0-5 5V10"
      stroke="#516F91"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <circle cx={15} cy={18.75} r={2.5} fill="#516F91" />
  </svg>
);

export default SvgDoor;
