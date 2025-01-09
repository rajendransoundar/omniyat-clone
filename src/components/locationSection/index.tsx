import React from "react";
import ContentSection from "../contentSection";
import Slide from "../amenities/slide"

export default function index() {
  return (
    <>
      <ContentSection
        section="location"
        title="Location"
        h3="the PRESTIGIOUS focal point of the marasi marina"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7220.736496829351!2d55.27736394851763!3d25.190801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736351418413!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContentSection
        section="location"
        h3="DISCOVER OUR MIXED-USE MASTERPIECES"
      />
      <      Slide/>

    </>
  );
}
