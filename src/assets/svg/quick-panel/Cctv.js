import * as React from "react";

const SvgCctv = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15} cy={13} r={1.25} stroke="#516F91" />
    <path
      d="M19.41 11.955c.399.44.598.66.598 1.045 0 .386-.2.606-.598 1.045C18.475 15.077 16.85 16.5 15 16.5c-1.849 0-3.475-1.423-4.41-2.455-.399-.44-.598-.66-.598-1.045 0-.386.2-.606.598-1.045C11.525 10.923 13.15 9.5 15 9.5c1.849 0 3.475 1.423 4.41 2.455Z"
      stroke="#516F91"
      strokeWidth={2}
    />
    <path
      d="m23.462 6.289-.394.919.394-.92L15.788 3a2 2 0 0 0-1.576 0L6.538 6.289a2 2 0 0 0-1.2 2.059l.901 8.112a7 7 0 0 0 2.476 4.604l5.005 4.17a2 2 0 0 0 2.56 0l5.005-4.17a7 7 0 0 0 2.476-4.604l.901-8.112a2 2 0 0 0-1.2-2.06Z"
      stroke="#516F91"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgCctv;
