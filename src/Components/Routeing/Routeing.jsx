import React from "react";
import { Link } from "react-router-dom";

function Routeing() {
  return (
    <div className=" w-[100%] items-start justify-between sm:flex text-center ">
      <h1 className="Rose text-[150px] font-[East_Sea_Dokdo] hover:text-[200px] hover:text-red-500 ">
        <Link to="/"> Rose </Link>
      </h1>

      <ul className="text-[34px]  gap-[4px]  items-center sm:flex ">
        <li className="inline font-[EB_Garamond] hover:text-[50px]  cursor-pointer hover:text-red-500 ">
          <Link to="/About"> About,</Link>
        </li>

        <li className="font-[EB_Garamond] hover:text-[50px] cursor-pointer hover:text-red-500  ">
          <Link to="/Experiences"> Experiences, </Link>
        </li>
        <li className="font-[EB_Garamond] hover:text-[50px] cursor-pointer hover:text-red-500  ">
          Email
        </li>
      </ul>
    </div>
  );
}

export default Routeing;
