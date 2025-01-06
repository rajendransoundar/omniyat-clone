import React from "react";

export default function Video() {
  return (
    <>
      <div className="amenities-vdo-container">
        <video
          id="2c9aaea8-a7a6-b1b1-c04d-12994dc6cb22-video"
          autoPlay
          loop
          muted
          playsInline
          style={{
            backgroundImage:
              'url("https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dc03608dde83fd8e6aa40_lana-dorchester-d-poster-00001.jpg")',
            objectFit: "cover",
          }}
          data-wf-ignore="true"
        >
          <source
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dc03608dde83fd8e6aa40_lana-dorchester-d-transcode.mp4"
            data-wf-ignore="true"
          />
          <source
            src="https://cdn.prod.website-files.com/64cd0df1806781d956403b26/651dc03608dde83fd8e6aa40_lana-dorchester-d-transcode.webm"
            data-wf-ignore="true"
          />
        </video>
      </div>
    </>
  );
}
