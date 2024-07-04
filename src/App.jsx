import "./App.css";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import MouseFollower from "./components/mouseFollower";
import TechMarquee from "./components/infiniteScroller";
import HomeCard from "./components/homeCard";
import { AnimatePresence, motion } from "framer-motion";
import ProjectSection from "./components/ProjectArea";
import MediaPlayer from "./components/mediaPlayer";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import MemeGenerator from "./components/memeGenerator";
import SocialComp from "./components/socialContain";
import Plane from "./components/Plane";
import SocialContainer from "./components/socialContainer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const socialDivRef = useRef();
  const socialRef = useRef();
  const constraintsRef = useRef(null);

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section", // Selects all sections as triggers
      start: "0% 0%", // Trigger animation when section enters viewport
      end: "40% 0%", // Trigger animation until section exits viewport
      scrub: true, // Continuously update animations as user scrolls
    },
  });

  // Get all sections
  const sections = document.querySelectorAll(".section");

  // Loop through sections and create tweens
  sections.forEach((section, index) => {
    // Extract or define desired background color for each section
    const color = section.dataset.color || "transparent"; // Default to lightblue

    tl.to(
      section,
      {
        // Animate the current section
        backgroundColor: color,
        duration: 4, // Adjust duration as needed
        ease: "linear", // Customize easing for smooth transition
      },
      index === 0 ? "0%" : ">-=" + index * 5 + "%"
    ); // Stagger animations based on section index
  });

  const [isVisible, setIsVisible] = useState(true);
  const [isSecondVisible, setIsSecondVisible] = useState(true);

  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);
      const triggerPoint = 100; // Adjust this value to control when to hide
      const secondTriggerPoint = 400;

      if (scrollY > triggerPoint) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      if (scrollY > secondTriggerPoint) {
        setIsSecondVisible(false);
      } else {
        setIsSecondVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isMobile && <MouseFollower />}
      <nav className="section--1 flex z-[900] justify-between bg-transparent items-center p-[2rem]">
        <p>Portfolio.io</p>
        <button className="bg-[#eee] px-3.5 py-[4px] border-[0.5px] border-[#bbb] rounded-lg">
          menu
        </button>
      </nav>
      <div className="main">
        <AnimatePresence>
          <motion.div
            ref={constraintsRef}
            className="home--section w-full h-[85vh] p-[2rem] relative overflow-hidden">
            <motion.div
              animate={{ opacity: 1, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
              drag
              dragConstraints={constraintsRef}
              className={`spotify--section opacity-0 blur-[30px] cursor-pointer z-[900] absolute flex flex-wrap items-center w-fit bg-[#e1ffec] ring-1 ring-[#00D960] gap-[1rem] rotate-[3deg] md:rotate-[-9deg] duration-100 rounded-full p-2 ${
                !isVisible ? "hide--up" : ""
              }`}>
              <span className="flex items-center gap-[10px]">
                <span className="relative flex items-center justify-center">
                  <img
                    className={`spotify--icon relative z-[100] bg-white rounded-full w-[24px] md:w-[40px]`}
                    src="./spotify.png"></img>
                  <img
                    id="music--icon--1"
                    className={`music--icon w-[20px] ${
                      isPlaying ? "hidden" : "flex"
                    }`} // Use 'hidden' class for better accessibility
                    src="./music.png"
                  />
                  <img
                    id="music--icon--2"
                    className={`music--icon w-[20px] ${
                      isPlaying ? "hidden" : "flex"
                    }`}
                    src="./music.png"
                  />
                  <img
                    id="music--icon--3"
                    className={`music--icon w-[20px] ${
                      isPlaying ? "hidden" : "flex"
                    }`}
                    src="./music.png"
                  />
                  <span
                    className={`img--circle ${
                      isPlaying ? "hidden" : "flex"
                    }`}></span>
                  <span
                    className={`img--circle ${
                      isPlaying ? "hidden" : "flex"
                    }`}></span>
                  <span
                    className={`img--circle ${
                      isPlaying ? "hidden" : "flex"
                    }`}></span>
                </span>
                <span>
                  <h2 className="font-bold text-[12px] md:text-[16px]">
                    Stay with me
                  </h2>
                  <p className="text-[8px] md:text-[12px] text-[#777]">
                    Miki Matsubara
                  </p>
                </span>
              </span>
              <button
                className="bg-[#00D960] text-white text-[14px] md:text-[18px] font-bold rounded-full py-1 px-4 outline-none"
                onClick={handleClick}>
                {isPlaying ? "Play" : "Pause"}
              </button>
              <audio ref={audioRef} src="./stay-song.mp3" preload="auto" />
            </motion.div>
            <HomeCard constraintsRef={constraintsRef} isVisible={isVisible} />
            <motion.h1
              animate={{ opacity: 1, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", duration: 2, delay: 0 }}
              data-value="my name. "
              className="leading-none opacity-0 blur-[30px] pb-4 md:leading-[10vh] text-[3rem] md:text-[6rem] text-left md:text-center font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] z-[900]"
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
            </motion.h1>
          </motion.div>
        </AnimatePresence>
        <div
          data-value="about me."
          className="home--section overflow-hidden w-full mb-[2rem] bg-transparent flex flex-col items-center rounded-2xl p-[2rem] md:p-0 border-0 relative">
          <img
            className="snap-img absolute z-[100] rotate-[-30deg] top-0 md:top-[-100px] w-[30vw]"
            src="https://images.bitmoji.com/3d/avatar/36722684-100845834104_5-s5-v1.webp"></img>
          <motion.span
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
            data-value="know more about me."
            className={`mobile--hide opacity-0 blur-[30px] absolute cursor-pointer gap-[3rem] bg-[#f6eaff] md:p-6 rounded-full ring-1 ring-[#bbb] rotate-[-15deg] hover:shadow-xl duration-100 top-[40px] left-0 ${
              isSecondVisible ? "hide--left" : ""
            }`}>
            <button
              data-value="know more about me."
              className="bg-[#AC66DD] w-auto py-2 px-4 text-[16px] rounded-full border-[1px] border-[#822ebe] shadow-xl text-[#fff] active:shadow-none">
              Simple Description.
            </button>
          </motion.span>
          <h1
            data-value="about me."
            className="font-bold text-[#777] my-[2rem] w-fit flex items-center gap-[10px]">
            <img src="./account.png" className="none md:flex w-[40px]"></img>
            About Me
          </h1>
          <p
            data-value="about me."
            className="text-[18px] md:text-[2rem] text-center md:w-[60%]">
            I am a Web Developer and UI/UX Designer. I have 2+ years of
            experience. My mission is to be best in my skill and give the best
            result from my hardwork and dedication.
          </p>
          <p
            data-value="about me."
            className="text-[18px] mt-[1rem] md:text-[2rem] text-justify">
            I'm high on skills.
          </p>
          <button
            data-value="wanna talk?"
            className="text-[1.5rem] font-bold rounded-full p-[0.5rem] bg-[#604CC3] text-[#eee] w-[270px] mt-[2rem] hover:bg-[#40318a] hover:text-[#fff] duration-100 shadow-xl active:shadow-none">
            Talk
          </button>
        </div>
        <div className="m-[2rem] md:mt-[4rem] bg-transparent rounded-2xl p-0 border-0 relative flex flex-col items-center">
          <span className="absolute right-[250px]">
            <motion.span
              animate={{ opacity: 1, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
              data-value="know more about me."
              className={`mobile--hide opacity-0 blur-[30px] absolute cursor-pointer gap-[3rem] bg-[#fff1be] px-6 py-3 rounded-lg ring-1 ring-[#bbb] rotate-[15deg] hover:shadow-xl duration-100 top-[40px] ${
                isSecondVisible ? "hide--left" : ""
              }`}>
              <img
                className="left-arm absolute z-[-1] w-[40px] left-[-35px]"
                src="./muscle.png"
                alt="icon"></img>
              <button
                data-value="know more about me."
                className="bg-[#FCCF32] relative py-2 z-[10] px-8 text-[10px] md:text-[16px] rounded-lg border-[1px] border-[#ffd439] shadow-xl text-[#000] active:shadow-none">
                Skills.
              </button>
              <img
                className="right-arm absolute w-[40px] right-[-35px] top-0 scale-x-[-1]"
                src="./muscle.png"
                alt="icon"></img>
            </motion.span>
          </span>
          <h1 className="font-bold text-[#777] my-[1rem] md:my-[2rem] w-fit">
            Skills I am high ON?
          </h1>
          <TechMarquee />
        </div>
        <div className="relative w-full flex justify-center">
          <MediaPlayer
          // isPlaying={isPlaying}
          // handleClick={handleClick}
          // audioRef={audioRef}
          />
        </div>
        <ProjectSection isMobile={isMobile} />
        <MemeGenerator />
        <SocialComp socialDivRef={socialDivRef} socialRef={socialRef} />
        <Plane isMobile={isMobile} />
        <SocialContainer />
        <div className="flex items-center justify-center">
          <h1 className="goBold text-[3rem] md:text-[10rem]">
            ROHAN CHAUDHARY
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
