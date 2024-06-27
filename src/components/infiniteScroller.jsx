import { motion } from "framer-motion";
import { useState } from "react";
import { isMobile } from "react-device-detect";

function TechMarquee() {
  const [buttonToggle, setButtonToggle] = useState(false);

  const skills = [
    {
      name: "HTML",
      img: "../../public/html.png",
    },
    {
      name: "CSS",
      img: "../../public/css.png",
    },
    {
      name: "JavaScript",
      img: "../../public/js.png",
    },
    {
      name: "React Js",
      img: "../../public/react.png",
    },
    {
      name: "Express Js",
      img: "../../public/express.png",
    },
    {
      name: "MongoDB",
      img: "../../public/mongodb.png",
    },
    {
      name: "Node Js",
      img: "../../public/nodejs.png",
    },
    {
      name: "Electron Js",
      img: "../../public/electron.png",
    },
    {
      name: "Tailwind CSS",
      img: "../../public/tailwind.png",
    },
    {
      name: "GSAP",
      img: "../../public/gsap.jpg",
    },
    {
      name: "ScrollTrigger",
      img: "../../public/gsap.jpg",
    },
    {
      name: "Framer-Motion",
      img: "../../public/framer-motion.png",
    },
  ];

  const toggleVariants = {
    left: { x: 0 },
    right: { x: "100%" },
  };

  return (
    <>
      <div className="mb-[200px]">
        <span className="border-[#bbb] relative border-[0px] flex w-fit rounded-[9px] duration-150">
          <motion.span
            animate={buttonToggle ? "right" : "left"}
            variants={toggleVariants}
            transition={{ duration: 0.3 }} // Adjust duration as needed
            className="bg-[#000] w-[140px] h-[40px] rounded-md absolute z-[100]"
          />
          <button
            data-value="all the front-end stuffs I know. ❤️"
            className={`p-2 w-[140px] rounded-lg z-[100] ${
              buttonToggle ? "black" : "white"
            }`}
            onClick={() => setButtonToggle(false)}>
            Front-end
          </button>
          <button
            data-value="all the back-end stuffs I know. 🖤"
            className={`p-2 w-[140px] rounded-lg z-[100] ${
              buttonToggle ? "white" : "black"
            }`}
            onClick={() => setButtonToggle(true)}>
            Back-end
          </button>
        </span>
        <div></div>
      </div>
    </>
  );
}

export default TechMarquee;
