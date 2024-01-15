import * as React from "react"
const Heart = ({heart}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill={heart ? "#029FAE":"#F0F2F3"}
  >
    <path
      stroke={heart ? "#FFFFFF":"#272343"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.633 10.632c-.984-3.071.165-6.581 3.39-7.62A5.507 5.507 0 0 1 11 3.848c1.334-1.031 3.274-1.38 4.968-.836 3.224 1.039 4.381 4.549 3.398 7.62C17.836 15.498 11 19.248 11 19.248s-6.785-3.692-8.367-8.617v0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Heart
