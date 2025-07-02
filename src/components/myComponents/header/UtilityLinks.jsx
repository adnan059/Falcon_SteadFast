import React from "react";
import packageImg from "../../../assets/images/package.png";
import help from "../../../assets/images/help-center.png";
import home from "../../../assets/images/home.png";

const UtilityLinks = () => {
  return (
    <div className="utilityLinks flex  justify-center items-center ml-4 gap-6">
      <div
        className="utilityLink flex  justify-center items-center uppercase gap-2 text-[var(--text-color2)]"
        style={{ fontSize: "var(--fs-b)" }}
      >
        <img src={packageImg} alt="package" />
        track order
      </div>

      <div
        className="utilityLink flex  justify-center items-center uppercase gap-2 text-[var(--text-color2)]"
        style={{ fontSize: "var(--fs-b)" }}
      >
        <img src={help} alt="help-center" />
        help center
      </div>

      <div
        className="utilityLink flex  justify-center items-center uppercase gap-2 text-[var(--text-color2)]"
        style={{ fontSize: "var(--fs-b)" }}
      >
        <img src={home} alt="seller" />
        sell with us
      </div>
    </div>
  );
};

export default UtilityLinks;
