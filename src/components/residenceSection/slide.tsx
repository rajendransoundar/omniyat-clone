"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CustomArrows from "../slideNav";
import Image from "next/image";

const splideOptions = {
  perPage: 1,
  perMove: 1,
  gap: 0,
  arrows: true,
  pagination: true,
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
                          alt="residence img"
                        />
                        <div className="overlay-shadow"></div>
                      </div>
                    </div>
                  </SplideSlide>
                );
              })}
          </SplideTrack>
          <CustomArrows theme = "white"/>
        </Splide>
      </div>
    </>
  );
}
const residenceSlides = [
  {
    id: 1,
    url: "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651db629a9f65c81acd53e9b_lana-residence-01-d.webp",
  },
  {
    id: 2,
    url: "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651db62acd8d7254508cf35a_lana-residence-02-d-p-1600.webp",
  },
  {
    id: 3,
    url: "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651db62aa78899259024c20b_lana-residence-03-d-p-1600.webp",
  },
];
