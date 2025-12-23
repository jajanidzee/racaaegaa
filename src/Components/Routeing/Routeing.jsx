import React from "react";
import { Link } from "react-router-dom";

function Routeing() {
  return (
    <div className="w-full justify-between flex-row sm:flex text-center ">
      <h1 className="text-[150px] font-[East_Sea_Dokdo] hover:text-[200px] hover:text-red-500   ">
        <Link to="/" className="">
          {" "}
          Rose{" "}
        </Link>
      </h1>

      <ul className="text-[34px] gap-1 flex bg-red-500 justify-center">
        <li className="inline   ">
          <Link
            to="/About"
            className="font-[EB_Garamond] hover:text-[50px]  cursor-pointer hover:text-red-500"
          >
            {" "}
            About,
          </Link>
        </li>

        <li className=" ">
          <Link
            to="/Experiences"
            className="font-[EB_Garamond] hover:text-[50px] cursor-pointer hover:text-red-500 "
          >
            {" "}
            Experiences,{" "}
          </Link>
        </li>
        <li className=" ">
          <Link className="font-[EB_Garamond] hover:text-[50px] cursor-pointer hover:text-red-500">
            {" "}
            Email
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Routeing;
