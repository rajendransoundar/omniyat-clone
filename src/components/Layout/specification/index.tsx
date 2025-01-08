"use client";
import React, { useState } from "react";

export default function index() {
  const [specOpen, setSpecOpen] = useState(false);
  console.log(specOpen, "jhfdjkshfjkh");

  return (
    <>
      <div className="spec-main-container">
        <div className="spec-header">
          <div className="title">Masterpiece Specifications</div>
          <button onClick={() => setSpecOpen(!specOpen)}>
            {specOpen ? "_" : "+"}
          </button>
        </div>
        {specOpen && (
          <>
            <div className="spec-grid-container">
              {specsItems?.map((item, index) => (
                <div className="spec-item" key={`${item.title}${index}`}>
                  <div className="spec-title">{item.title}</div>
                  <div
                    className="spec-content"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

const specsItems = [
  {
    title: "Location",
    content: "Marasi Bay",
  },
  {
    title: "Use",
    content: "Residences, Hotel, F&B and retail",
  },
  {
    title: "Architecture",
    content: "Foster + Partners",
  },
  {
    title: "Interior Designers",
    content: "Gilles & Boissier",
  },
  {
    title: "Completed by",
    content: "2023",
  },
  {
    title: "Residences type",
    content: "39 Residences",
  },
  {
    title: "Simplex",
    content: "2 Bedroom + Study <br> 3,900 - 4,000 sq. ft",
  },
  {
    title: "Simplex",
    content: "4 Bedroom <br> 7,700 - 7,800 sq. ft",
  },
  {
    title: "Duplex",
    content: "4 Bedroom <br> 6,302 sq. ft",
  },
  {
    title: "Duplex",
    content: "4 Bedroom <br> 6,200 - 10,000 sq. ft",
  },
  {
    title: "Penthouses",
    content: "4-5 Bedrooms <br> 9,400 - 17,700 sq. ft.",
  },
];

const SpecCloseIcon = () => {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 12.364H5v-1h14v1Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const SpecOpenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="1000"
      height="1000"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="__lottie_element_11">
          <rect width="1000" height="1000" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clip-path="url(#__lottie_element_11)">
        <g
          transform="matrix(0,5.639999866485596,-5.639999866485596,0,629.781005859375,490.7950439453125)"
          opacity="1"
        >
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              fill-opacity="0"
              stroke="rgb(255,255,255)"
              stroke-opacity="1"
              stroke-width="4"
              d=" M2,2 C2,2 2,44.77299880981445 2,44.77299880981445"
            ></path>
          </g>
        </g>
        <g
          transform="matrix(0,5.639999866485596,-5.639999866485596,0,511.28045654296875,367.2576599121094)"
          opacity="1"
        >
          <g
            opacity="1"
            transform="matrix(1,0,0,1,21.38800048828125,32.777000427246094)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              fill-opacity="0"
              stroke="rgb(255,255,255)"
              stroke-opacity="1"
              stroke-width="4"
              d=" M23.385000228881836,-30.777000427246094 C23.385000228881836,-30.777000427246094 -19.38800048828125,-30.777000427246094 -19.38800048828125,-30.777000427246094"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
