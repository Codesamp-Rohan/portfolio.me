import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ProjectSection = ({ constraintsRef, isVisible }) => {
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

  return (
    <div className="w-full flex flex-col items-center mb-[100px] relative">
      {/* APPLE */}
      <motion.div
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
        drag
        dragConstraints={constraintsRef}
        className={`mac--section opacity-0 blur-[30px] cursor-pointer z-[900] absolute flex flex-row md:flex-col items-center w-fit bg-[#000000] rotate-[9deg] duration-100 rounded-full md:rounded-xl gap-[1rem] md:gap-[4rem] p-2 md:p-4 ${
          !isVisible ? "hide--up" : ""
        }`}>
        <h1 className="absolute text-black top-[-40px] whitespace-nowrap">
          Why not listen to this master piece?
        </h1>
        <span className="flex items-center gap-[10px]">
          <span className="relative flex items-center justify-center">
            <img
              className={`spotify--icon relative z-[100] bg-black rounded-full w-[40px] p-1`}
              src="./mac.png"></img>
            <img
              id="music--icon--1"
              className={`music--icon  w-[20px] ${
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
              className={`img--circle ${isPlaying ? "hidden" : "flex"}`}></span>
            <span
              className={`img--circle ${isPlaying ? "hidden" : "flex"}`}></span>
            <span
              className={`img--circle ${isPlaying ? "hidden" : "flex"}`}></span>
          </span>
          <span>
            <h2 className="font-bold text-white text-[12px] md:text-[16px]">
              Something Special
            </h2>
            <p className="text-[8px] md:text-[12px] text-[#ddd]">
              by Aditya & Anshuman
            </p>
          </span>
        </span>
        <button
          className="bg-[#fff] text-black w-fit md:w-full text-[14px] md:text-[18px] font-bold rounded-full md:rounded-md py-1 px-4 outline-none"
          onClick={handleClick}>
          {isPlaying ? "Play" : "Pause"}
        </button>
        <audio ref={audioRef} src="./pehle-bhi-main.mp3" preload="auto" />
      </motion.div>
      {/* APPLE */}
      <h1 className="font-bold text-[#777] my-[1rem] md:my-[2rem] w-fit">
        Projects
      </h1>
    </div>
  );
};

export default ProjectSection;
