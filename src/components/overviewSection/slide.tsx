"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CustomArrows from "../slideNav";
import Image from "next/image";
// import Image from "next/image";
const splideOptions = {
  perPage: 1,
  perMove: 1,
  gap: 0,
  arrows: true,
  pagination: false,
  lazyload: true,
  breakpoints: {
    768: {
      perPage: 1,
    },
    600: {
      perPage: 1,
    },
  },
};
export default function slide() {
  return (
    <>
      <div className="residence-slides">
        <Splide
          options={splideOptions}
          className="residence_slider"
          hasTrack={false}
        >
          <SplideTrack>
            {residenceSlides &&
              residenceSlides?.map((slide: any, index: any) => {
                return (
                  <SplideSlide key={slide?.id} className="splide__slide">
                    <div className="residence-card">
                      <div className="residence-card-img">
                        <Image
                          src={slide?.url}
                          width={580}
                          height={350}
                          alt={slide?.title}
                        />
                        <div className="overview-slide-content">
                          <h4>{slide?.title}</h4>
                          <div className="overview-content">
                            {slide?.content}
                          </div>
                        </div>
                        <div className="overlay-shadow"></div>
                      </div>
                    </div>
                  </SplideSlide>
                );
              })}
          </SplideTrack>
          <CustomArrows theme="white" />
        </Splide>
      </div>
    </>
  );
}
const residenceSlides = [
  {
    id: 1,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/654cc3aa01d2cb5faa65a248_lana-overview-01-d.webp",
    title: "Architecture by Foster+Partners",
    content:
      "The building’s innovative use of floor-to-ceiling glass, and terraces throughout its full height make it an instantly recognisable architectural icon.",
  },
  {
    id: 2,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/654cc64ed3b4afcfdb680d8d_lana-overview-02-d.webp",
    title: "For the mind, body and soul",
    content:
      "The Lana Residences, Dorchester Collection, Dubai provides its residents with a spectrum of luxury living and leisure.",
  },
  {
    id: 3,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/654ccc55c618140a846ab723_lana-overview-03-d.webp",
    title: "In the heart of dubai",
    content:
      "Across the water from The Lana Residences, Dorchester Collection, Dubai, lies Burj Khalifa District, a stylish area that combines shops and offices with residential buildings and hotels.",
  },
];
