import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
// import { useEffect, useState } from "react";

const MediaPlayer = ({ isPlaying, handleClick, audioRef }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
      }}
      className={`relative cursor-pointer z-[900] flex flex-col justify-between flex-wrap w-[90vw] md:w-[60vw] bg-[#000] gap-[10px] duration-100 rounded-3xl p-5`}>
      <img
        className="rounded-2xl w-full h-[40vh] object-cover"
        src="https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2771.jpg"></img>
      <span className="flex items-center gap-[10px] mb-[20px]">
        <span className="relative flex items-center justify-center">
          <img
            className={`spotify--icon relative z-[100] bg-black rounded-full w-[24px] p-1 md:w-[40px]`}
            src="./mac.png"></img>
          <img
            id="music--icon--1"
            className={`music--icon w-[20px] ${isPlaying ? "hidden" : "flex"}`} // Use 'hidden' class for better accessibility
            src="./whiteMusic.png"
          />
          <img
            id="music--icon--2"
            className={`music--icon w-[20px] ${isPlaying ? "hidden" : "flex"}`}
            src="./whiteMusic.png"
          />
          <img
            id="music--icon--3"
            className={`music--icon w-[20px] ${isPlaying ? "hidden" : "flex"}`}
            src="./whiteMusic.png"
          />
          <span
            className={`mac--circle ${isPlaying ? "hidden" : "flex"}`}></span>
          <span
            className={`mac--circle ${isPlaying ? "hidden" : "flex"}`}></span>
          <span
            className={`mac--circle ${isPlaying ? "hidden" : "flex"}`}></span>
        </span>
        <span>
          <h2 className="font-bold text-[12px] text-[#fff] md:text-[16px]">
            Something Special
          </h2>
          <p className="text-[8px] md:text-[12px] text-[#ddd]">
            by Aditya & Anshuman
          </p>
        </span>
      </span>
      <button
        className="bg-[#fff] text-[#000] text-[14px] md:text-[18px] font-bold rounded-full p-2 outline-none"
        onClick={handleClick}>
        {isPlaying ? "Play" : "Pause"}
      </button>
      <audio ref={audioRef} src="./pehle-bhi-main.mp3" preload="auto" />
    </motion.div>
  );
};

export default MediaPlayer;
