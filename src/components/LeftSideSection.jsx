import React from "react";
import logo from "../assets/logo.png";
import pensil from "../assets/icons/pensil.png";
import bag from "../assets/icons/bag.png";
import note from "../assets/icons/note.png";
import line2 from "../assets/icons/line2.svg";

const LeftSideSection = () => {
  return (
    <div className="">
      <img
        src={logo}
        alt="logo"
        className="w-[130px] md:w-[160px] h-[91.02px] absolute top-0 left-2 md:left-0"
      />
      <img
        src={line2}
        alt="line2"
        className="absolute top-[113.64px] -left-[18.51px] h-full md:h-auto"
      />
      <img
        src={pensil}
        alt="pensil"
        className="w-[45px] md:w-[60px] absolute top-32 -left-1"
      />
      <img
        src={bag}
        alt="bag"
        className="w-[45px] md:w-[61.76px] absolute top-[45%] -left-1"
      />
      <img
        src={note}
        alt="note"
        className="w-[45px] md:w-[66.32px] absolute bottom-[5%] -left-1"
      />
    </div>
  );
};

export default LeftSideSection;
