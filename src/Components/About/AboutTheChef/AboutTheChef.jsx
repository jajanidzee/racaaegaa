import React from "react";
import img from "../../Img/imageheadshot.png";
const AboutTheChef = () => {
  return (
    <>
      <div className="flex justify-between">
        <p className="w-[50%] text-[20px] font-[EB_Garamond]">The Chef</p>

        <div className=" w-[50%] ">
          <img className="" src={img} alt="" />
          <h1 className="text-[30px] italic mb-[40px] mt-[70px]">
            Chef Julianne Coulter
          </h1>
          <p className="text-[20px] mb-[60px] font-[EB_Garamond]">
            Our kitchen is led by a talented team of women, dedicated to
            creating dishes that honor both tradition and contemporary culinary
            artistry. With every bite, you’re experiencing the heart of
            Scandinavia — crafted with care, passion, and a commitment to
            sustainability and community. Welcome to a new chapter of Nordic
            dining.
          </p>
        </div>
      </div>
      <hr className="w-[100%] text-[#BA9787] mb-[30px]" />
    </>
  );
};

export default AboutTheChef;
