import React from "react";

export default function index({ title, h3, pTag, section }:any) {
  return (
    <div className={`${section ? section: ""} "content-section"`}>
      {title && <div className="content-title">{title}</div>}
      {h3 && <h3 className="content-h3">{h3}</h3>}
      {pTag && <p className="content-para">{pTag}</p>}
    </div>
  );
}
