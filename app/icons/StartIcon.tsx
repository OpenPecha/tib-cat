import React from "react";

const StarIcon = ({ width = 13, height = 13, color = "#C4AC69" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.57941 2.25183C4.96993 1.10893 6.549 1.07432 7.01201 2.14799L7.05119 2.25248L7.5782 3.79375C7.69898 4.14722 7.89415 4.47068 8.15055 4.7423C8.40695 5.01393 8.71862 5.2274 9.06454 5.36833L9.20625 5.42123L10.7474 5.94761C11.8903 6.33816 11.9249 7.91731 10.8519 8.38034L10.7474 8.41953L9.20625 8.94656C8.85267 9.06727 8.52911 9.26241 8.25738 9.51883C7.98565 9.77525 7.77209 10.087 7.6311 10.433L7.5782 10.574L7.05184 12.116C6.66132 13.2589 5.08226 13.2935 4.6199 12.2205L4.57941 12.116L4.05305 10.5747C3.93236 10.2211 3.73722 9.89752 3.48082 9.62578C3.22441 9.35404 2.9127 9.14046 2.56672 8.99946L2.42566 8.94656L0.884472 8.42018C-0.259013 8.02964 -0.293624 6.45049 0.779985 5.9881L0.884472 5.94761L2.42566 5.42123C2.77911 5.30045 3.10255 5.10527 3.37416 4.84885C3.64577 4.59243 3.85924 4.28075 4.00016 3.93482L4.05305 3.79375L4.57941 2.25183ZM11.04 1.18004e-07C11.1622 -1.54109e-07 11.2819 0.0342726 11.3856 0.0989233C11.4892 0.163574 11.5727 0.25601 11.6264 0.365726L11.6578 0.442136L11.8863 1.1122L12.557 1.34078C12.6795 1.38238 12.7868 1.45939 12.8654 1.56205C12.944 1.66471 12.9904 1.78841 12.9987 1.91746C13.0069 2.04651 12.9767 2.17511 12.9118 2.28695C12.8469 2.3988 12.7502 2.48885 12.6341 2.54571L12.557 2.57706L11.887 2.80564L11.6584 3.47635C11.6168 3.59876 11.5397 3.70604 11.437 3.7846C11.3343 3.86316 11.2106 3.90947 11.0816 3.91765C10.9525 3.92584 10.824 3.89553 10.7122 3.83057C10.6004 3.76561 10.5104 3.66893 10.4536 3.55276L10.4222 3.47635L10.1937 2.80629L9.52297 2.57771C9.40054 2.53611 9.29321 2.4591 9.21459 2.35644C9.13596 2.25377 9.08959 2.13008 9.08133 2.00103C9.07308 1.87198 9.10332 1.74338 9.16823 1.63154C9.23313 1.51969 9.32978 1.42964 9.44591 1.37278L9.52297 1.34143L10.193 1.11285L10.4216 0.442136C10.4656 0.313104 10.5489 0.201089 10.6598 0.121799C10.7707 0.0425084 10.9037 -8.1819e-05 11.04 1.18004e-07Z"
        fill={color}
      />
    </svg>
  );
};

export default StarIcon;