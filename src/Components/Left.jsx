import * as React from "react";
const Left = ({LeftArrow}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    {/* <path fill={LeftArrow ? "#007580" : "#F0F2F3"} d="M24 0H0v24h24z" /> */}
    <path
      stroke={LeftArrow ? "#fff" : "#272343"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 7.5 20 12m0 0-4.5 4.5M20 12H4"
    />
  </svg>
);
export default Left;
