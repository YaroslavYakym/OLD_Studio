import * as React from "react";
const SvgMenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    viewBox="0 0 512 512"
    {...props}
  >
    <rect x={64} y={117} width={384} height={48} rx={24} fill="currentColor" />
    <rect x={64} y={232} width={384} height={48} rx={24} fill="currentColor" />
    <rect x={64} y={347} width={384} height={48} rx={24} fill="currentColor" />
  </svg>
);
export default SvgMenuIcon;
