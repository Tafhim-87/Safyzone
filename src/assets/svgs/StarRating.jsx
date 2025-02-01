import * as React from "react";
const StarRating = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#FF8A00"
        d="m5.825 21 1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625 7.2.625-5.45 4.725L18.175 21 12 17.275 5.825 21Z"
      />
    </g>
    <mask
      id="b"
      width={24}
      height={24}
      x={24}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M24 0h24v24H24z" />
    </mask>
    <g mask="url(#b)">
      <path
        fill="#FF8A00"
        d="m29.825 21 1.625-7.025L26 9.25l7.2-.625L36 2l2.8 6.625 7.2.625-5.45 4.725L42.175 21 36 17.275 29.825 21Z"
      />
    </g>
    <mask
      id="c"
      width={24}
      height={24}
      x={48}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M48 0h24v24H48z" />
    </mask>
    <g mask="url(#c)">
      <path
        fill="#FF8A00"
        d="m53.825 21 1.625-7.025L50 9.25l7.2-.625L60 2l2.8 6.625 7.2.625-5.45 4.725L66.175 21 60 17.275 53.825 21Z"
      />
    </g>
    <mask
      id="d"
      width={24}
      height={24}
      x={72}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M72 0h24v24H72z" />
    </mask>
    <g mask="url(#d)">
      <path
        fill="#FF8A00"
        d="m77.825 21 1.625-7.025L74 9.25l7.2-.625L84 2l2.8 6.625 7.2.625-5.45 4.725L90.175 21 84 17.275 77.825 21Z"
      />
    </g>
    <mask
      id="e"
      width={24}
      height={24}
      x={96}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M96 0h24v24H96z" />
    </mask>
    <g mask="url(#e)">
      <path
        fill="#FF8A00"
        d="m101.825 21 1.625-7.025L98 9.25l7.2-.625L108 2l2.8 6.625 7.2.625-5.45 4.725L114.175 21 108 17.275 101.825 21Z"
      />
    </g>
  </svg>
);
export default StarRating;
