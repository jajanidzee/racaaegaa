import React from "react";
import Buttons from "../../Buttons/Buttons";
import img from "../../Img/Frameimg.png";
function AboutExperience() {
  return (
    <div className="flex items-center">
      <div className="w-[50%]">
        <p className="text-[40px] font-[EB_Garamond] mb-[60px]">
          Experience the warmth of Balmain's waterfront at Rose. Where the
          everyday is elevated to the extraordinary.
        </p>
        <Buttons btn1="Book on Resy" btn2="Dining Experiences" />
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default AboutExperience;
