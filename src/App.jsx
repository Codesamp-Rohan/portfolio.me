import "./App.css";
import { isMobile } from "react-device-detect";
// import profileImg from "./assets/Rohan.jpg";
// import account from "./assets/account.png";
import MouseFollower from "./components/mouseFollower";
import TechMarquee from "./components/infiniteScroller";
import HomeCard from "./components/homeCard";

function App() {
  return (
    <>
      {!isMobile && <MouseFollower />}
      <nav className="section--1 flex justify-between items-center p-[2rem]">
        <p>Portfolio.io</p>
        <button className="bg-[#eee] px-3.5 py-[4px] border-[0.5px] border-[#bbb] rounded-lg">
          menu
        </button>
      </nav>
      <div className="w-full h-[85vh] p-[2rem] relative">
        <HomeCard />
        <h1
          data-value="my name. "
          className="leading-none pb-4 md:leading-[20vh] text-[4rem] md:text-[10rem] text-left md:text-center font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] z-[900]"
          style={{
            background:
              "linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44)",
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
        className="mx-[2rem] mb-[2rem] md:m-[2rem] md:w-[60%] bg-[#f7f7f7] md:bg-[#fff] rounded-2xl p-[2rem] md:p-0 border-[1px] border-[#bbb] md:border-0">
        <h1 className="font-bold text-[#777] my-[1rem] md:my-[2rem] w-fit flex items-center gap-[10px]">
          <img src="./account.png" className="w-[30px]"></img>About Me
        </h1>
        <p className="text-[18px] md:text-[2rem] text-justify">
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
        {isMobile && (
          <span className="absolute flex z-[100] w-[100px] bg-[#604CC3] text-[#fff] text-center rounded-xl p-2 rotate-45 right-[-30px] top-[0]">
            Skills
          </span>
        )}
        <h1 className="font-bold text-[#777] my-[1rem] md:my-[2rem] w-fit">
          Skills I am high ON?
        </h1>
        <TechMarquee />
      </div>
    </>
  );
}

export default App;
