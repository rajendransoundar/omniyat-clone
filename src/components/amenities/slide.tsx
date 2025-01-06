"use client";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import Image from "next/image";
const splideOptions = {
  perPage: 2,
  perMove: 1,
  gap: 10,
  arrows: true,
  pagination: true,
  lazyload: true,
  breakpoints: {
    768: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
};
export default function slide() {
 
  return (
    <>
      <div className="amenities-slides">
        <Splide
          options={splideOptions}
          className="amenities_slider"
        >
          {amenitiesSlides &&
            amenitiesSlides?.map((slide: any, index: any) => {
              return (
                <SplideSlide key={slide?.id} className="splide__slide">
                  <div className="amenities-card">
                    <div className="amenities-card-img">
                        <img src={slide?.url} width={300} height={450} alt={slide?.title} />
                    </div>
                    <div className="card-text"><h4>{slide?.title}
                    </h4></div>
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
    </>
  );
}
const amenitiesSlides = [
  {
    id: 1,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/6571c01519907d4c2ea312f6_amenities-01-d.webp",
    title: "The Lana Hotel",
  },
  {
    id: 2,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/6571c098a54614588377f048_amenities-02-d.webp",
    title: "Expansive outdoor pool",
  },
  {
    id: 3,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/6571c0e259a5c67d534ca6eb_amenities-03-d.webp",
    title: "Concierge on arrival",
  },
  {
    id: 4,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/6571c131a31bfafca6984b46_amenities-04-d.webp",
    title: "Restaurants",
  },
  {
    id: 5,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/6571c16f0873ea243e456b8d_amenities-05-d.webp",
    title: "The Lana Promenade",
  },

  {
    id: 6,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/6571c1c9caaca58285e6fbf0_amenities-06-d.webp",
    title: "Car valet and grooming service",
  },
  {
    id: 7,
    url: "https://cdn.prod.website-files.com/64d10d152d5483b843123d85/6571c23f7a3c4eb09b5ed8d0_amenities-07-d.webp",
    title: "Rooftop Pool",
  }
];