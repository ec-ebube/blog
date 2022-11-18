import React from "react";
import Luna from "./Images/luna base.png";

function footer() {
  return (
    <div className="footer">
      <div className="made-by">
        <span>Made by</span>
        <br></br>
        <img src={Luna} alt=""></img>

        <div className="luna-base">
          <span>LUNA BASE</span>
          –– Is a software development company. That specialise in building SaaS
          apps from start to finish for customers across Nigeria, Africa and
          Europe.
        </div>
      </div>
      <div className="social">
        <h3 className="social-link">Social Links</h3>
        <p className="social-media">
          <li className="facebook">Facebook</li>
          <li className="twitter">Twitter</li>
          <li className="instagram">Instagram</li>
        </p>
      </div>
      <div className="useful">
        <h3 className="useful-links">Useful Links</h3>
        <p className="other-links">
          <li>Help center</li>
          <li>Blog</li>
          <li>Customer stories</li>
          <li>Our policy</li>
          <li>Terms of Service</li>
          <li>Affiliate Program</li>

        </p>
      </div>
    </div>
  );
}

export default footer;
