import React from "react";

export default function index() {
  return (
    <>
      <section>
        <div className="hero-main-container">
          <div className="hero-bg">
            <video
              id="3d7331bf-ecd0-3da6-227c-a441f4885947-video"
              autoPlay
              loop
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dbbdcaec73606a8bc0454_lana-hero-video-d-poster-00001.jpg")',
              }}
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dbbdcaec73606a8bc0454_lana-hero-video-d-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dbbdcaec73606a8bc0454_lana-hero-video-d-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </div>
          <div className="hero-scroll-container"></div>
        </div>
      </section>
    </>
  );
}
