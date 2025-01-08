import React from "react";

export default function index() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-header">
            <a
              href="https://www.omniyat.com/"
              className="footer_logo_link w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/653166984911545913a0f28c_footer-logo.svg"
                loading="lazy"
                width={358}
                alt="Omniyat - The Art Of Elevation"
                className="footer_logo"
              />
            </a>
          </div>
          <div className="footer-links">
            <div className="footer-links-col-container">
              {footerData?.map((item) => {
                return (
                  <>
                    <div className="footer-links-col" key={item?.id}>
                      <h3>{item.title}</h3>
                      <ul className="footer-links-list">
                        {item?.lists?.map((list, index) => (
                          <li key={index} className="footer-links-item">
                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const footerData = [
  {
    id: 1,
    title: "Residential",
    lists: [
      "The Alba Residences, Dorchester Collection, Dubai",
      "AVA at Palm Jumeirah, Dorchester Collection, Dubai",
      "ORLA Infinity, Dorchester Collection ",
      "ORLA Infinity, Dorchester Collection",
      "ORLA, Dorchester Collection, Dubai",
      "VELA, Dorchester Collection, Dubai",
      "VELA Viento, Dorchester Collection, Dubai",
    ],
  },
  {
    id: 2,
    title: "Mixed Use",
    lists: ["The OPUS by OMNIYAT", "The Lana, Dorchester Collection, Dubai"],
  },
  {
    id: 3,
    title: "Explore",
    lists: ["Our Story", "Contact Us", "News"],
  },
];
