import * as React from "react";

const SvgMouse = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 65"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      fill="none"
      d="M46.875 39.375c0 9.281-7.594 16.875-16.875 16.875s-16.875-7.594-16.875-16.875v-18.75C13.125 11.344 20.719 3.75 30 3.75s16.875 7.594 16.875 16.875z"
    />
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M30 13v10"
    />
  </svg>
);

export default SvgMouse;
