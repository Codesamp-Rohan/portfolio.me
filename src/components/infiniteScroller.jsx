import { motion } from "framer-motion";
import { useState } from "react";

function TechMarquee() {
  const [buttonToggle, setButtonToggle] = useState(false);

  const toggleVariants = {
    left: { x: 0 },
    right: { x: "100%" },
  };

  const skills = [
    { img: "./Icons/html.png" },
    { img: "./Icons/css.png" },
    { img: "./Icons/js.png" },
    { img: "./Icons/react.png" },
    { img: "./Icons/express.png" },
    { img: "./Icons/mongodb.png" },
    { img: "./Icons/nodejs.png" },
    { img: "./Icons/gsap.jpg" },
    { img: "./Icons/tailwind.png" },
  ];

  return (
    <>
      <div className="mb-[200px] flex flex-col items-center">
        <span className="border-[#bbb] relative border-[0px] w-fit flex items-center rounded-[9px] duration-150">
          <motion.span
            animate={buttonToggle ? "right" : "left"}
            variants={toggleVariants}
            transition={{ duration: 0.3 }}
            className="bg-[#000] w-[140px] h-[40px] rounded-full absolute z-[100]"
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
              {skills.concat(skills).map((skill, index) => {
                // Duplicated skills array
                return (
                  <img
                    key={index}
                    className="p-1 bg-[#000] shadow-xl border-[1px] border-[#000] rounded-lg w-[37px]"
                    src={skill.img}></img>
                );
              })}
              {skills.concat(skills).map((skill, index) => {
                // Duplicated skills array
                return (
                  <img
                    key={index}
                    className="p-1 bg-[#000] shadow-xl border-[1px] border-[#000] rounded-lg w-[37px]"
                    src={skill.img}></img>
                );
              })}
            </div>
            <div className="gradient--right"></div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </>
  );
}

export default TechMarquee;
