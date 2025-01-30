import React from "react";
import link from "../../../link.json";

const obaseUri = JSON.parse(JSON.stringify(link));
const footerText = obaseUri.footerText;

function Footer() {
  return (
    <>
      <div>
        <hr />
        <p className="pe-3 text-center">All Right Reserved - {footerText}</p>
      </div>
    </>
  );
}

export default Footer;
