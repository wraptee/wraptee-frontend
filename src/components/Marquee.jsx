import React from "react";
import "../styles/marquee.css";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-item">
          For customized products, please contact 9811873015 &nbsp;&nbsp;&nbsp;
          | &nbsp;&nbsp;&nbsp;
        </span>
        <span className="marquee-item">
          For Corporate Gifting, please contact 9811873015 &nbsp;&nbsp;&nbsp; |
          &nbsp;&nbsp;&nbsp;
        </span>
        <span className="marquee-item">
          Free Shipment on every product &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
};

export default Marquee;
