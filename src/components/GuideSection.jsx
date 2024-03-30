import React from "react";
import watch from "../assets/icons/watch.png";
import home from "../assets/icons/home.png";
import close from "../assets/icons/close.png";

const GuideSection = ({ setToggle }) => {
  return (
    <div className="flex items-center w-full h-full border-2 border-white bg-black/20 rounded-2xl p-8 font-shortStack font-normal relative">
      <button
        className="absolute right-5 top-5"
        onClick={() => setToggle(false)}
      >
        <img src={close} alt="close" className="w-[35px] md:w-[48px]" />
      </button>
      <h2 className="absolute top-14 left-[50%] -translate-x-[50%] text-xl md:text-[32px] leading-[39.41px] text-white">
        Guide Sheet
      </h2>
      <div className="w-full">
        <p className="text-sm md:textlg lg:text-[20px] leading-5 lg:leading-[29px] text-white mb-4">
          So, what do you think the definition of setting is?
        </p>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-5 mb-5">
          <p className="text-sm md:textlg lg:text-[20px] leading-5 lg:leading-[29px] text-white md:w-[21%]">
            Any guesses?
          </p>
          <div className="bg-white border-[3px] border-dashed border-[#CCCCCC] pt-2 pb-3 px-4 rounded-xl  w-full relative">
            <span className="text-sm md:textlg lg:text-[20px] leading-5 lg:leading-[29px]">
              {"> "}Setting is the time and place of a story.
            </span>
            <span className="absolute left-4 bottom-[9px] w-[95%] h-[2px] bg-[#bbbbbb] text-white"></span>
          </div>
          <div className="flex items-center gap-3 md:w-[30%]">
            <span className="text-sm md:textlg lg:text-[20px] leading-5 lg:leading-[29px] text-white">
              Hint:
            </span>
            <img src={home} alt="home" className="w-[35px] lg:w-[47.77px]" />
            <img src={watch} alt="watch" className="w-[35px] lg:w-[47.77px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
