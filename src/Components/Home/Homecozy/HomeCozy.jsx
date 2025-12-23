import React from "react";
import Buttons from "../../Buttons/Buttons";
import Schedule from "../../Schedule/Schedule";
import img from "../../Img/imagehero.png";
import image from "../../Img/imageminihero.png";
import { motion } from "motion/react";
function HomeCozy() {
  return (
    <>
      <div className=" items-start gap-5 mt-[34px] flex-row sm:flex ">
        <div className="w-full sm:w-[50%] ">
          <p className="text-[40px] mb-10 sm:mb-[90px]">
            Cozy meets refined on Balmain's waterfront.
          </p>
          <div className="mb-[60px] sm:">
            <Buttons btn1="Book on Resy" btn2="Dining Experiences" />
          </div>
        </div>
        <div className="w-[100%] sm:w-[50%]">
          <hr className="w-full mb-[30px]" />
          <Schedule />
        </div>
      </div>
      {/* <img
        src={img}
        alt="foto"
        className="mt-[30px] mb-10 opacity-[0] sm:opacity-[1px]"
      /> */}
      <img
        src={img}
        alt="foto"
        className="mt-[30px] mb-10 hover:hidden sm:hover:block"
      />
      <img src={image} alt="foto" />

      <hr className="w-full text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default HomeCozy;
