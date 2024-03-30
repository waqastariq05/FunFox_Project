import React from "react";
import user from "../assets/icons/user.png";
import info from "../assets/icons/info.svg";
import shade from "../assets/icons/shade.png";
import slideLeft from "../assets/icons/slideLeft.png";
import slideRight from "../assets/icons/slideRight.png";

const SliderController = ({ slide, setSlide }) => {
  return (
    <div className="absolute bottom-0 w-full pb-2">
      <div className="container mx-auto flex items-center justify-between px-5 md:px-10 font-shortStack font-normal">
        {/* icon # 01 */}
        <div className="bg-[rgb(205,63,151)] rounded-full w-[35px] md:w-[45px] h-[35px] md:h-[45px] flex item-center justify-center border-[2px] border-[rgb(168,50,123)] outline outline-[3px] outline-[#F8EBFD] p-[8px] md:p-[10px] relative">
          <img
            src={shade}
            alt="shade"
            className="absolute top-[1px] left-[6px] w-[12px] md:w-[14px]"
          />
          <img src={user} alt="user" />
        </div>

        {/* Slider buttons */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            className={slide === 1 ? "opacity-50" : "opacity-100"}
            disabled={slide === 1 ? true : false}
            onClick={() => setSlide(slide - 1)}
          >
            <img
              src={slideLeft}
              className="w-[31px] md:w-[41px] h-[35px] md:h-[45px]"
            />
          </button>
          <div className="flex items-center border-2 border-[#F8EBFD] rounded-lg bg-[rgb(205,63,151)]">
            <div className="w-full px-4 md:px-5 flex items-center h-[32px] md:h-[37px] text-sm md:text-[20px] text-white border-r border-white/50">
              {slide}
            </div>
            <div className="w-full h-[32px] md:h-[37px] px-2 border-l-2 border-[rgb(168,50,123)] text-sm md:text-[20px] leading-6 text-white">
              &#x2304;
            </div>
          </div>
          <button
            className={slide === 2 ? "opacity-50" : "opacity-100"}
            disabled={slide === 2 ? true : false}
            onClick={() => setSlide(slide + 1)}
          >
            <img
              src={slideRight}
              className="w-[31px] md:w-[41px] h-[35px] md:h-[45px]"
            />
          </button>
        </div>

        {/* icon # 02 */}
        <div className="bg-[rgb(205,63,151)] rounded-full w-[35px] md:w-[45px] h-[35px] md:h-[45px] flex item-center justify-center border-[2px] border-[rgb(168,50,123)] outline outline-[3px] outline-[#F8EBFD] p-[8px] md:p-[10px] relative">
          <img
            src={shade}
            alt="shade"
            className="absolute top-[1px] left-[6px] w-[12px] md:w-[14px]"
          />
          <img src={info} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default SliderController;
