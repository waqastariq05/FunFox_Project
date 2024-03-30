import React from "react";
import scale from "../assets/icons/scale.png";
import book from "../assets/icons/book.png";
import book2 from "../assets/icons/book2.png";
import cap from "../assets/icons/cap.png";
import line1 from "../assets/icons/line1.svg";

const RightSideSection = ({ slide, setToggle }) => {
  return (
    <div className="">
      <img
        src={line1}
        alt="line1"
        className="absolute top-[33.29px] -right-[18.51px]"
      />
      <img
        src={scale}
        alt="scale"
        className="w-[50px] md:w-[92.1px] absolute top-32 right-0"
      />
      {slide === 1 ? (
        <img
          src={book}
          alt="book"
          className="w-[50px] md:w-[74.02px] absolute top-[45%] right-0"
        />
      ) : (
        <button onClick={() => setToggle(true)}>
          <img
            src={book2}
            alt="book2"
            className="w-[45px] md:w-[66.44px] absolute top-[45%] right-0"
          />
        </button>
      )}
      <img
        src={cap}
        alt="cap"
        className="w-[50px] md:w-[82.21px] absolute bottom-[12%] right-0"
      />
    </div>
  );
};

export default RightSideSection;
