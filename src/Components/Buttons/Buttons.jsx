import React from "react";
import { motion } from "motion/react";
function Buttons({ btn1, btn2 }) {
  return (
    <div className=" flex gap-[10px]">
      <button className=" w-[134px] h-[58px] bg-[#000000] rounded-[2px] text-[#EBC1AE]  font-[EB_Garamond]  text-[16px] italic hover:w-[200px] hover:h-[78px] cursor-pointer">
        <a href="https://www.nba.com/" target="blank">
          {btn1}
        </a>
      </button>
      <button className="btn2 w-[170px] h-[58px] bg-[#000000]  font-[EB_Garamond] rounded-[2px] text-[#EBC1AE] text-[16px] italic hover:w-[200px] hover:h-[78px] cursor-pointer">
        <a href="https://www.nba.com/" target="blank">
          {btn2}
        </a>
      </button>
    </div>
  );
}

export default Buttons;
