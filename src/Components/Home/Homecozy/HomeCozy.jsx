import React from "react";
import Buttons from "../../Buttons/Buttons";
import Schedule from "../../Schedule/Schedule";
import img from "../../Img/imagehero.png";
import { motion } from "motion/react";
function HomeCozy() {
  return (
    <>
      <div className=" items-start gap-5 mt-[34px] flex ">
        <div className="w-[50%] ">
          <motion.p
            animate={{
              scale: [0.5, 1.5, 1],
              transition: { duration: 2 },
            }}
            className="text-[40px] mb-[90px]"
          >
            Cozy meets refined on Balmain's waterfront.
          </motion.p>
          <div className="">
            <Buttons btn1="Book on Resy" btn2="Dining Experiences" />
          </div>
        </div>
        <div className="w-[50%]">
          <hr className="w-full mb-[30px]" />
          <Schedule />
        </div>
      </div>
      <img src={img} alt="" className="mt-[30px] mb-10" />
      <hr className="w-full text-[#BA9787] mb-[30px]" />
    </>
  );
}

export default HomeCozy;
