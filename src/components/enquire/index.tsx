import React from "react";

export default function index() {
  return (
    <section className="enquire-section">
      <div className="enquire-outer-container">
        <div className="enquire-container">
          <div className="enquire-bg">
            <video
              id="bb3652db-ae13-cc8c-06f2-97c5c0f2a66f-video"
              autoPlay
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527e8cb13838166773d53f3_Enquiry-background-m-poster-00001.jpg")',
              }}
              muted
              loop
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6527e8cb13838166773d53f3_Enquiry-background-m-transcode.mp4"
                data-wf-ignore="true"
              />
            </video>
          </div>
          <div className="enquire-overlay"></div>
          <div className="enquire-content">
            <h3>Discover exclusivity</h3>
            <div className="enquire-more">Enquire for more details.</div>
            <div className="enquire-cta">
              <a href="https://www.omniyat.com/contact">
                <span>
                  <ReqCallBackIcon />
                </span>
                Request a Callback
              </a>
              <a href="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/6525c116d290c283f39ad120">
                <span>
                  <DownloadIcon />
                </span>
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ReqCallBackIcon = () => {
  return (
    <>
      <svg
        width="13"
        height="13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.774 8.084a.5.5 0 0 1 .475-.043l2.947 1.32a.5.5 0 0 1 .3.52A3.021 3.021 0 0 1 9.5 12.5 8.5 8.5 0 0 1 1 4a3.02 3.02 0 0 1 2.62-2.997.5.5 0 0 1 .519.3l1.32 2.95a.5.5 0 0 1-.04.47L4.081 6.314a.496.496 0 0 0-.033.488c.517 1.058 1.61 2.139 2.672 2.65a.495.495 0 0 0 .489-.036l1.564-1.331Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </>
  );
};

const DownloadIcon = () => {
  return (
    <>
      <svg
        width="10"
        height="10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 6.75V8.5h-7V6.75H.333V8.5A1.17 1.17 0 0 0 1.5 9.666h7A1.17 1.17 0 0 0 9.667 8.5V6.75H8.5Zm-.583-2.334-.823-.822-1.51 1.505V.333H4.416v4.766L2.906 3.594l-.823.822L5 7.333l2.917-2.917Z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
};
