import React from "react";

export default function index() {
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
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--next">
          <svg
            width="28"
            height="11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m.67 4.74 24.135.021-4.061-3.87.933-.891 5.658 5.392-5.533 5.274-.934-.89 3.94-3.755-24.14-.022.001-1.26Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
