"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const OverlayImageChanger = () => {
  const divRef = useRef(null);
  const [overlayImage, setOverlayImage] = useState("");

  const overlayImages = {
    first:
      "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571c968719ea123f97ef3c2_lana-residence-overlay-01-p-1600.webp",
    second:
      "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571c9689252c6777eab54c0_lana-residence-overlay-02-p-1600.webp",
    third:
      "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571c9686f881d664706c4bb_lana-residence-overlay-03-p-1600.webp",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;

      const rect = divRef.current.getBoundingClientRect();
      const divTop = rect.top;
      const divHeight = rect.height;
      const scrolledPercentage = (Math.abs(divTop) / divHeight) * 100;
      console.log(rect, divHeight, scrolledPercentage, "%%%%%%%%%%%%%%%");

      if (scrolledPercentage >= 40 && scrolledPercentage <= 70) {
        setOverlayImage(overlayImages["third"]);
      } else if (scrolledPercentage >= 20) {
        setOverlayImage(overlayImages["second"]);
      } else if (scrolledPercentage >= 0) {
        setOverlayImage(overlayImages["first"]);
      } else {
        setOverlayImage(""); // Reset the overlay if below the first threshold
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
    className="residence-highlight-div"
      ref={divRef}
      style={{
        height: "200vh", // Adjust the height for scrolling effect
        position: "relative",
      }}
    >
      {/* Main Image */}
      <Image
        src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6571af2b6e694652412ee3c8_lana-residence-2x-p-1600.webp"
        alt="Main"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        width={1340}
        height={748}
      />

      {/* Overlay Image */}
      {overlayImage && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${overlayImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            pointerEvents: "none",
            zIndex: 1,
          }}
        ></div>
      )}
    </div>
  );
};

export default OverlayImageChanger;
