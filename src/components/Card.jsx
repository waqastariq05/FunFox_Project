import React from "react";

const Card = ({ img, text }) => {
  return (
    <div className="md:w-[300px] text-center flex flex-col items-center gap-2">
      <div className="w-[235.03px] h-[180px] flex items-center justify-center px-6 border-[3px] border-[#CCCCCC] border-dashed rounded-xl">
        <img src={img} alt={img} className="" />
      </div>
      <h4 className="text-sm md:text-lg lg:text-[20px] leading-5 lg:leading-[29px] text-black">
        {text}
      </h4>
    </div>
  );
};

export default Card;
