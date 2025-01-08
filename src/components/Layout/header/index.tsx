"use client";
import React, { useState, useEffect } from "react";
// import "./Header.css";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrolledDown(true); // Scrolling down
      } else {
        setIsScrolledDown(false); // Scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`header ${isScrolledDown ? "scrolled" : ""}`}>
      <div className="header-main-row">
        <div className="menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="6" width="20" height="2" fill="#fff"></rect>
            <rect x="2" y="16" width="20" height="2" fill="#fff"></rect>
          </svg>
        </div>
        <div className="logo">
          <a href="https://www.omniyat.com/" className="brand-logo w-nav-brand">
            <img
              src={
                isScrolledDown
                  ? "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d36c24ac73440c5d71e180_omniyat-logo-icon.svg"
                  : "https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d0f5a02c9c892bbd0bd804_omniyat-logo.svg"
              }
              loading="lazy"
              alt="Omniyat"
              className="logo-icon"
            />
          </a>
        </div>
        <button className="contact-btn">Contact Us</button>
      </div>

      {!isScrolledDown && (
        <div className="hedaer-nav">
          <a href="#overview">Overview</a>
          <a href="#residences">Residences</a>
          <a href="#amenities">Amenities</a>
          <a href="#location">Location</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
