import React from "react";
import VideoSection from "./video";
import ContentSection from "../contentSection";
import Slide from "./slide"

export default function index() {
  return (
    <>
      <ContentSection
        section="amenities"
        title="Amenities"
        h3="Amenities for the Discerning Few"
        pTag="The Lana Residences, Dorchester Collection, Dubai, provides its residents with a spectrum of luxury living and leisure, that includes an outdoor pool overlooking the stunning Downtown skyline, fully equipped gym with yoga studios, dining and function room with conference facilities and lounge."
      />
      <Slide/>
      <VideoSection />
    </>
  );
}
