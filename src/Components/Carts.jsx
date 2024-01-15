import * as React from "react";
const Cart = ({cart}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill={cart ? "#029FAE":"#F0F2F3"}
  >
    <g
      stroke={cart ? "#FFFFFF":"#272343"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="m2.52 2.98 1.908.33.882 10.516a1.65 1.65 0 0 0 1.65 1.515h10.001a1.65 1.65 0 0 0 1.635-1.417l.871-6.011a1.231 1.231 0 0 0-1.041-1.394c-.059-.006-13.692-.01-13.692-.01M12.948 9.896h2.542" />
      <path
        fill={cart ? "#FFFFFF":"#272343"}
        fillRule="evenodd"
        d="M6.558 18.52a.499.499 0 1 1 .042.997.499.499 0 0 1-.042-.997ZM16.899 18.52a.5.5 0 1 1 0 .999.5.5 0 0 1 0-1Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default Cart;
