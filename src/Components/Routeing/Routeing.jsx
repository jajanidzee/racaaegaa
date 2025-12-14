import React from "react";
import { Link } from "react-router-dom";

function Routeing() {
  return (
    <div className="flex w-[100%] justify-between">
      <h1 className="Rose text-[150px] font-[East_Sea_Dokdo] ">
        <Link to="/"> Rose </Link>
      </h1>

      <ul className="text-[34px] flex gap-[4px]  font-[EB_Garamond] ">
        <li>
          <Link to="/About"> About,</Link>
        </li>

        <li>Experiences,</li>
        <li>Email</li>
      </ul>
    </div>
  );
}

export default Routeing;
