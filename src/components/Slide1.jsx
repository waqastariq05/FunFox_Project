import React from "react";
import heading from "../assets/heading.png";
import avatar from "../assets/avatar.png";
import c1 from "../assets/cloud/c1.png";
import c2 from "../assets/cloud/c2.png";
import c3 from "../assets/cloud/c3.png";
import paper from "../assets/paper.png";

const cloudData = [
  {
    img: c1,
    text: "SETTING",
  },
  {
    img: c3,
    text: "CHARACTERS",
  },
  {
    img: c1,
    text: "PLOT",
  },
  {
    img: c2,
    text: "PROBLEM OR CONFLICT",
  },
  {
    img: c3,
    text: "RESOLUTION",
  },
];

const Slide1 = () => {
  return (
    <div className=" w-full bg-white rounded-2xl p-5 md:p-8 font-shortStack font-normal">
      {/* Week icon */}
      <div className="absolute top-[26px] left-[140px]">
        <img
          src={heading}
          alt="heading"
          className="w-[120px] md:w-[140px] relative bottom-5"
        />
      </div>
      {/* Main heading */}
      <div className="w-full md:w-[529px] lg:h-[55px] py-1 px-1 lg:px-0 lg:py-0 bg-textDarkPink border-[3.31px] border-[#FFAEBE] border-dashed rounded-full mx-auto drop-shadow-lg mb-3">
        <h3 className="text-sm md:text-lg lg:text-[30px] leading-[20px] lg:leading-[45px] text-center text-white">
          Elements of Story Writing
        </h3>
      </div>
      <p className="text-base md:text-lg leading-5 lg:text-[24px] lg:leading-[29px] tracking-tight text-[#1E242F] mb-3">
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey? Over the next week, we will be practicing the different
        elements of story writing. Our aim is to make stories more interesting
        and exciting.
      </p>

      {/* Main Content */}
      <div className="bg-textDarkGreen md:h-[120px] lg:h-[114px] border-[3px] border-dashed border-textLightGreen rounded-[5px] flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-10 py-2 px-2 drop-shadow-lg mb-7">
        <p className="text-sm md:text-lg leading-5 lg:text-[24px] lg:leading-[29px] w-full text-white">
          There are elements which make the foundation for story writing. An
          element is an essential part of something and every fiction story has
          the same key elements:
        </p>
        <div className="md:w-1/6">
          <img
            src={avatar}
            alt="avatar"
            className="w-[100%] h-[140px] relative -top-5"
          />
        </div>
      </div>

      {/* Cloud Section */}
      <div className="flex flex-wrap gap-3 lg:gap-0 md:flex-nowrap items-center justify-center md:justify-between mb-4">
        {cloudData.map((data, i) => {
          return (
            <div className="relative" key={i}>
              <img
                src={data.img}
                alt="c1"
                className="w-[110px] md:w-[184.93px]"
              />
              <span className="text-sm md:text-base lg:text-[20px] leading-4 lg:leading-[24.63px] absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] text-center">
                {data.text}
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-base md:text-lg lg:text-[24px] leading-5 lg:leading-[29px] pr-2 mb-5 lg:mb-8">
        You must be familiar with some of these. If not, do not worry! we will
        cover all these elements as we go along.
      </p>

      {/* Text on paper Setion */}
      <div className="bg-textDarkPink px-4 pt-1 pb-2 rounded-2xl relative shadow-darkShadow">
        <img
          src={paper}
          alt="paper"
          className="h-[170px] md:h-[122.22px] w-full"
        />
        <p className="text-sm md:text-base lg:text-[24px] leading-4 lg:leading-[29px] absolute top-[45%] -translate-y-[50%] px-4 md:px-12">
          For today’s lesson, we will try to understand and practice writing the
          setting for our stories. <br />
          The setting is an important element of every fiction story.
        </p>
      </div>
    </div>
  );
};

export default Slide1;
