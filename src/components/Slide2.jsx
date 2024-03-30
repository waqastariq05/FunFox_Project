import React from "react";
import Card from "./Card";
import c1 from "../assets/card/c1.png";
import c2 from "../assets/card/c2.png";
import watch from "../assets/icons/watch.png";
import home from "../assets/icons/home.png";

const Slide2 = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-5 md:p-8 font-shortStack font-normal">
      {/* Text */}
      <p className="text-base md:text-lg lg:text-[32px] leading-5 lg:leading-[39.41px] tracking-tight text-[#1E242F] mb-2">
        Can you figure out the definition of setting from the following
        examples?
      </p>
      <p className="text-base md:text-lg lg:text-[24px] leading-5 lg:leading-[29.55px] text-[#1E242F] mb-4">
        (take a minute to think about this)
      </p>

      {/* Card Section */}
      <div className="flex flex-wrap md:flex-nowrap gap-y-5 items-start justify-center md:justify-between mx-auto lg:mx-[100px] xl:mx-[220px] mb-6">
        <Card img={c1} text="Sunny day at a beach" />
        <Card
          img={c2}
          text="A cold rainy night in a haunted house in October"
        />
      </div>

      {/* Guide Section */}
      <p className="text-base md:text-lg lg:text-[20px] leading-5 lg:leading-[29px] text-[#1E242F] mb-4">
        So, what do you think the definition of setting is?
      </p>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-5 mb-5">
        <p className="text-base md:text-lg lg:text-[20px] leading-5 lg:leading-[29px] text-[#1E242F] lg:w-[21%]">
          Any guesses?
        </p>
        <div className="border-[3px] border-dashed border-[#CCCCCC] py-5 md:py-6 px-4 rounded-xl w-full relative">
          <span className="absolute left-2 md:left-4 bottom-[9px] w-[95%] h-[2px] bg-[#bbbbbb] text-white"></span>
        </div>
        <div className="flex items-center gap-3 md:w-[30%]">
          <span className="text-base md:text-lg lg:text-[20px] leading-[29px] text-[#1E242F">
            Hint:
          </span>
          <img src={home} alt="home" className="w-[35px] lg:w-[47.77px]" />
          <img src={watch} alt="watch" className="w-[35px] lg:w-[47.77px]" />
        </div>
      </div>

      {/* Content */}
      <div className="bg-textDarkGreen md:h-[114px] border-[3px] border-dashed border-textLightGreen rounded-[5px] py-2 px-2 drop-shadow-lg mb-3">
        <p className="text-base md:text-lg lg:text-[24px] leading-5 lg:leading-[29px] w-full text-white flex items-center flex-wrap gap-x-3 gap-y-2">
          <span>Setting is the time</span>
          <img src={watch} alt="watch" className="w-[25px] md:w-[34.72px]" />
          <span>and place</span>
          <img src={home} alt="home" className="w-[25px] md:w-[34.72px]" />
          <span>of a story. It often answers the</span>
          <span>questions: when? and where?</span>
        </p>
      </div>

      <p className="text-base md:text-lg lg:text-[20px] leading-5 lg:leading-[24.63px] pr-2">
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>
    </div>
  );
};

export default Slide2;
