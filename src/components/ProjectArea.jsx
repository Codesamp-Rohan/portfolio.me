/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ProjectSection = ({ isMobile }) => {
  return (
    <div
      data-bgcolor="#000"
      data-textcolor="#fff"
      className="flex flex-col items-center">
      <div className="section h-[60vh]"></div>
      <div className="section">
        <Project isMobile={isMobile} ProjectDetails={ProjectDetails} />
      </div>
    </div>
  );
};

const Project = ({ ref, scrollYProgress, isMobile, ProjectDetails }) => {
  return (
    <div className="flex flex-col w-full gap-[10rem]">
      {ProjectDetails.map((detail, i) => {
        return (
          <motion.div
            key={i}
            ref={ref}
            style={{
              scale: scrollYProgress,
            }}
            className={`relative cursor-pointer z-[900] flex flex-col justify-between flex-wrap w-[90vw] md:w-[60vw] bg-[#fff] text-[#000] gap-[10px] duration-100 rounded-xl md:rounded-3xl p-2 md:p-5`}>
            <img
              className={`rounded-lg md:rounded-2xl w-full ring-1 ring-[#000] object-cover ${
                isMobile ? `h-[60vh]` : `max-h-[70vh] h-auto`
              }`}
              src={isMobile ? detail.mobImg : detail.deskImg}></img>
            <div className="flex flex-col md:flex-row justify-between gap-[10px] mb-[20px]">
              <span>
                <h2 className="font-bold text-[18px] text-[#000] md:text-[24px]">
                  {detail.title}
                </h2>
                <p className="text-[12px] md:text-[14px] text-[#444]">
                  {detail.description}
                </p>
              </span>
              <span className="flex flex-row md:flex-col justify-between md:justify-center gap-2">
                <span>
                  <p>Frontend</p>
                  <span className="flex gap-2">
                    <img className="w-[30px]" src="./Icons/react.png"></img>
                    <img className="w-[30px]" src="./Icons/nodejs.png"></img>
                  </span>
                </span>
                <span>
                  <p>Backend</p>
                  <span className="flex gap-2">
                    <img className="w-[30px]" src="./Icons/react.png"></img>
                    <img className="w-[30px]" src="./Icons/nodejs.png"></img>
                  </span>
                </span>
              </span>
            </div>
            <button className="bg-[#000] text-[#fff] text-[14px] md:text-[18px] font-bold rounded-xl p-4 outline-none">
              Detail
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

const ProjectDetails = [
  {
    deskImg: "./Projects/holesail-03.png",
    mobImg: "./Projects/holesail-04.png",
    title: "Holesail",
    description: "Peer to Peer reverse tunneling software",
    floatIcon: "",
  },
  {
    deskImg: "./Projects/3siixtin-01.png",
    mobImg: "./Projects/3siixtin-01.png",
    title: "3SIIXTIN",
    description: "Peer to Peer reverse tunneling software",
    floatIcon: "",
  },
];

export default ProjectSection;
