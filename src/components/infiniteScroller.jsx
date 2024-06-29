import { motion } from "framer-motion";
import { useState } from "react";

function TechMarquee() {
  const [buttonToggle, setButtonToggle] = useState(false);

  const toggleVariants = {
    left: { x: 0 },
    right: { x: "100%" },
  };

  const frontendskills = [
    { img: "./Icons/html.png", value: "html." },
    { img: "./Icons/css.png", value: "html." },
    { img: "./Icons/js.png", value: "html." },
    { img: "./Icons/react.png", value: "html." },
    { img: "./Icons/express.png", value: "html." },
    { img: "./Icons/mongodb.png", value: "html." },
    { img: "./Icons/nodejs.png", value: "html." },
    { img: "./Icons/gsap.png", value: "html." },
    { img: "./Icons/framer-motion.png", value: "html." },
    { img: "./Icons/tailwind.png", value: "html." },
    { img: "./Icons/wordpress.png", value: "html." },
  ];

  const backendskills = [
    { img: "./Icons/html.png", value: "html." },
    { img: "./Icons/css.png", value: "html." },
    { img: "./Icons/js.png", value: "html." },
    { img: "./Icons/react.png", value: "html." },
    { img: "./Icons/express.png", value: "html." },
    { img: "./Icons/mongodb.png", value: "html." },
    { img: "./Icons/nodejs.png", value: "html." },
    { img: "./Icons/gsap.png", value: "html." },
    { img: "./Icons/tailwind.png", value: "html." },
    { img: "./Icons/wordpress.png", value: "html." },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <span className="border-[#bbb] relative border-[0px] w-fit flex items-center rounded-[9px] duration-150">
          <motion.span
            animate={buttonToggle ? "right" : "left"}
            variants={toggleVariants}
            transition={{ duration: 0.3 }}
            className="bg-[#222] w-[140px] h-[40px] rounded-full absolute z-[100]"
          />
          <button
            data-value="all the front-end stuffs I know. ❤️"
            className={`p-2 w-[140px] z-[100] ${
              buttonToggle ? "black" : "white"
            }`}
            onClick={() => setButtonToggle(false)}>
            Front-end
          </button>

          <button
            data-value="all the back-end stuffs I know. 🖤"
            className={`p-2 w-[140px] z-[100] ${
              buttonToggle ? "white" : "black"
            }`}
            onClick={() => setButtonToggle(true)}>
            Back-end
          </button>
        </span>

        {!buttonToggle && (
          <div className="h-[30vh] flex items-center w-[100%] relative overflow-hidden">
            <div className="gradient--left"></div>
            <div className="flex gap-[0.6rem] relative animate-scroll w-[40vw]">
              {frontendskills.concat(frontendskills).map((skill, index) => {
                // Duplicated skills array
                return (
                  <img
                    data-value={skill.value}
                    key={index}
                    className="shadow-xl border-[1px] rounded-lg w-[37px] cursor-pointer"
                    src={skill.img}></img>
                );
              })}
              {frontendskills.concat(frontendskills).map((skill, index) => {
                // Duplicated skills array
                return (
                  <img
                    data-value={skill.value}
                    key={index}
                    className="shadow-xl border-[1px] rounded-lg w-[37px] cursor-pointer"
                    src={skill.img}></img>
                );
              })}
            </div>
            <div className="gradient--right"></div>
          </div>
        )}
        {buttonToggle && (
          <div className="h-[30vh] flex items-center w-[100%] relative overflow-hidden">
            <div className="gradient--left"></div>
            <div className="flex gap-[0.6rem] relative animate-scroll w-[40vw]">
              {backendskills.concat(backendskills).map((skill, index) => {
                // Duplicated skills array
                return (
                  <img
                    data-value={skill.value}
                    key={index}
                    className="shadow-xl border-[1px] rounded-lg w-[37px] cursor-pointer"
                    src={skill.img}></img>
                );
              })}
              {backendskills.concat(backendskills).map((skill, index) => {
                // Duplicated skills array
                return (
                  <img
                    data-value={skill.value}
                    key={index}
                    className="shadow-xl border-[1px] rounded-lg w-[37px] cursor-pointer"
                    src={skill.img}></img>
                );
              })}
            </div>
            <div className="gradient--right"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default TechMarquee;
