import "./App.css";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import MouseFollower from "./components/mouseFollower";
import TechMarquee from "./components/infiniteScroller";
import HomeCard from "./components/homeCard";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 100; // Adjust this value to control when to hide

      if (scrollY > triggerPoint) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isMobile && <MouseFollower />}
      <nav className="section--1 flex z-[900] justify-between items-center p-[2rem]">
        <p>Portfolio.io</p>
        <button className="bg-[#eee] px-3.5 py-[4px] border-[0.5px] border-[#bbb] rounded-lg">
          menu
        </button>
      </nav>
      <div className="home--section w-full h-[85vh] p-[2rem] relative overflow-hidden">
        <div
          className={`spotify--section z-[999] absolute flex items-center w-fit bg-[#e1ffec] ring-1 ring-[#00D960] gap-[1rem] rotate-[3deg] md:rotate-[-9deg] duration-700 rounded-full p-2 ${
            !isVisible ? "opacity-0" : ""
          }`}>
          <span className="flex items-center gap-[10px]">
            <img
              className="spotify--icon w-[24px] md:w-[40px] rounded-lg"
              src="./spotify.png"></img>
            <span>
              <h2 className="font-bold text-[12px] md:text-[16px]">
                Stay with me
              </h2>
              <p className="text-[8px] md:text-[12px] text-[#777]">
                Miki Matsubara
              </p>
            </span>
          </span>
          <button className="bg-[#00D960] text-white text-[14px] md:text-[18px] font-bold rounded-full py-1 px-4">
            Play
          </button>
        </div>
        <HomeCard isVisible={isVisible} />
        <h1
          data-value="my name. "
          className="leading-none pb-4 md:leading-[10vh] text-[3rem] md:text-[6rem] text-left md:text-center font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] z-[900]"
          style={{
            background:
              "linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #FFDD04)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text", // Standard property for wider compatibility
          }}>
          Rohan
          <br />
          Chaudhary
        </h1>
      </div>
      <div
        data-value="about me."
        className="mx-[2rem] mb-[2rem] md:m-[2rem] bg-[#f7f7f7] md:bg-[#fff] rounded-2xl p-[2rem] md:p-0 border-[1px] border-[#bbb] md:border-0 relative">
        <img
          className="snap-img absolute z-[-1] md:z-[100] rotate-[0deg] top-[-100px] sm:top-[-140px] md:top-[-100px] w-[30vw]"
          src="https://images.bitmoji.com/3d/avatar/765808989-100845834104_4-s5-v1.webp"></img>
        <h1 className="font-bold text-[#777] my-[1rem] md:my-[2rem] w-fit flex items-center gap-[10px]">
          <img src="./account.png" className="w-[30px]"></img>About Me
        </h1>
        <p className="text-[18px] md:text-[2rem] text-justify md:w-[60%]">
          I am a Web Developer and UI/UX Designer. I have 2+ years of
          experience. My mission is to be best in my skill and give the best
          result from my hardwork and dedication.
        </p>
        <p className="text-[18px] mt-[1rem] md:text-[2rem] text-justify">
          I'm high on skills.
        </p>
        <button
          data-value="wanna talk?"
          className="text-[1.5rem] font-bold rounded-md md:rounded-xl p-[0.5rem] bg-[#604CC3] text-[#eee] w-full md:w-[270px] mt-[2rem] hover:bg-[#40318a] hover:text-[#fff] duration-100 shadow-xl active:shadow-none">
          Talk
        </button>
      </div>
      <div className="m-[2rem] md:mt-[4rem] bg-[#f7f7f7] md:bg-[#fff] rounded-2xl p-[2rem] md:p-0 border-[1px] border-[#bbb] md:border-0 relative">
        <h1 className="font-bold text-[#777] my-[1rem] md:my-[2rem] w-fit">
          Skills I am high ON?
        </h1>
        <TechMarquee />
      </div>
    </>
  );
}

export default App;
