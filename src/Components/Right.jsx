import * as React from "react";
const Right = ({ RightArrow }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path fill={RightArrow ? "#007580" : "#F0F2F3"} d="M24 0H0v24h24z" />
    <path
      stroke={RightArrow ? "#fff" : "#272343"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 7.5 4 12m0 0 4.5 4.5M4 12h16"
    />
  </svg>
);
export default Right;
