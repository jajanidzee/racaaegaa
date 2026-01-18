import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
function Routeing() {
  return (
    <div className=" w-[100%] items-start justify-between flex-col sm:flex   ">
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className="Rose text-[150px] font-[East_Sea_Dokdo]  "
      >
        <Link to="/"> Rose </Link>
      </motion.h1>

      <ul className="text-[34px]  gap-[4px] flex">
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="inline font-[EB_Garamond] cursor-pointer "
        >
          <Link to="/About"> About,</Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="font-[EB_Garamond] cursor-pointer   "
        >
          <Link to="/Experiences"> Experiences, </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="font-[EB_Garamond] cursor-pointer   "
        >
          Email
        </motion.li>
      </ul>
    </div>
  );
}

export default Routeing;
