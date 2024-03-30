import "./App.css";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import LeftSideSection from "./components/LeftSideSection";
import RightSideSection from "./components/RightSideSection";
import SliderController from "./components/SliderController";
import { useState } from "react";
import GuideSection from "./components/GuideSection";

const slides = [
  {
    index: 1,
    slide: <Slide1 />,
  },
  {
    index: 2,
    slide: <Slide2 />,
  },
];

function App() {
  const [slide, setSlide] = useState(1);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-textLightPink min-h-screen h-full relative overflow-hidden flex items-center justify-center px-5 py-16 md:px-14">
      <LeftSideSection />
      {slides
        .filter((e) => e.index === slide)
        .map((data) => {
          return <div key={data.index}>{data.slide}</div>;
        })}
      <RightSideSection slide={slide} setToggle={setToggle} />
      <SliderController slide={slide} setSlide={setSlide} />
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-screen p-10 bg-[#6C5D4AB2] backdrop-blur-sm">
          <GuideSection setToggle={setToggle} />
        </div>
      )}
    </div>
  );
}

export default App;
