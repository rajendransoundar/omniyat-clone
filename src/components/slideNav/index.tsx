import React from "react";
interface CustomArrowsProps {
  theme?: any; //optional
}
export default function index({ theme }:CustomArrowsProps) {
  const svgClr = theme === "white" ? "#ffff" : "#0a0a3d";
  return (
    <>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev">
          <svg
            width="27"
            height="11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.667 4.74 2.53 4.76 6.592.891 5.658 0 .001 5.392l5.533 5.274.934-.89-3.94-3.755 24.14-.022-.001-1.26Z"
              fill={svgClr}
            ></path>
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--next">
          <svg
            width="27"
            height="11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.667 4.74 2.53 4.76 6.592.891 5.658 0 .001 5.392l5.533 5.274.934-.89-3.94-3.755 24.14-.022-.001-1.26Z"
              fill={svgClr}
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
