import React from "react";
import ContentSection from "../contentSection";
import Slides from "./slide";

export default function index() {
  return (
    <>
      <ContentSection
        section="overview"
        title="Overview"
        h3="A life less ordinary"
        pTag="With only 39 exquisite apartments, managed exclusively by Dorchester Collection, this elite waterfront development in the Burj Khalifa District is the perfect embodiment of the legendary Dorchester Collection experience, the iconic architecture of Foster + Partners, and the timeless design of Gilles & Boissier."
      />
      <Slides />
    </>
  );
}
