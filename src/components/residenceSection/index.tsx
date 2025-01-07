import React from "react";
import ResidenceHighlights from "./residenceHighlight";
import ContentSection from "../contentSection";
import Slides from "./slide";

export default function index() {
  return (
    <>
      <ContentSection
        section="residences"
        title="Residences"
        h3="The ultimate address"
        pTag="Every aspect of this prestigious new address on the waterfront of the Marasi Bay Marina embodies the unmistakable essence of luxury, creating an unparalleled living experience."
      />
      <Slides />
      <ContentSection
        section="residences-mid-content"
        content="The 32-storey tower houses a range of exclusive penthouses to apartments with two to four bedrooms. With gracious proportions, private terraces, and floor-to-ceiling windows, each one overlooks the cityscape of Dubai."
      />
      <ResidenceHighlights />
    </>
  );
}
