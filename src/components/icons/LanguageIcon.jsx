import * as React from "react";
const SvgLanguageIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="square"
    aria-labelledby="languageIconTitle"
    color="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path
      strokeLinecap="round"
      d="M12 22q4-3.636 4-10T12 2Q8 5.637 8 12q0 6.364 4 10ZM2.5 9h19m-19 6h19"
    />
  </svg>
);
export default SvgLanguageIcon;
