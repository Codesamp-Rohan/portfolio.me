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
    <>
      <h1 className="font-bold text-[18px] w-full text-center mb-[30px] relative z-[100]">
        Projects
      </h1>
      <div className="flex flex-col w-full gap-[5rem]">
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
                className={`rounded-lg md:rounded-2xl w-full h-[40vh] ring-1 ring-[#000] object-cover ${
                  isMobile ? `h-[60vh]` : `max-h-[40vh] h-auto`
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
                  <span className="flex flex-col md:items-end">
                    <p>Frontend</p>
                    <span className="flex gap-2">
                      {detail.frontEnd && Array.isArray(detail.frontEnd) ? (
                        <span className="flex gap-2">
                          {detail.frontEnd.map((icon, i) => (
                            <img
                              key={i}
                              className="w-[30px] rounded-lg"
                              src={icon.tech}
                              alt="icon"
                            />
                          ))}
                        </span>
                      ) : (
                        <p>No Frontend Technologies Listed</p>
                      )}
                    </span>
                  </span>
                  <span className="flex flex-col md:items-end">
                    <p>Backend</p>
                    <span className="flex gap-2">
                      {detail.backEnd && Array.isArray(detail.backEnd) ? (
                        <span className="flex gap-2">
                          {detail.backEnd.map((icon, i) => (
                            <img
                              key={i}
                              className="w-[30px] rounded-lg bg-[#000]"
                              src={icon.tech}
                              alt="icon"
                            />
                          ))}
                        </span>
                      ) : (
                        <p>No Frontend Technologies Listed</p>
                      )}
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
    </>
  );
};

const ProjectDetails = [
  {
    deskImg: "./Projects/holesail-05.png",
    mobImg: "./Projects/holesail-04.png",
    title: "Holesail",
    description: "Peer to Peer reverse tunneling software.",
    floatIcon: "",
    frontEnd: [
      { tech: "./Icons/docusaurus.png" },
      { tech: "./Icons/js.png" },
      { tech: "./Icons/react.png" },
      { tech: "./Icons/tailwind.png" },
    ],
    backEnd: [
      { tech: "./Icons/nodejs.png" }, // Assuming each tech is an object
      { tech: "./Icons/express.png" },
    ],
  },
  {
    deskImg: "./Projects/3siixtin-02.png",
    mobImg: "./Projects/3siixtin-01.png",
    title: "3SIIXTIN",
    description: "A clothing eCommerce website made and managed by me.",
    floatIcon: "",
    frontEnd: [
      { tech: "./Icons/wordpress.png" }, // Assuming each tech is an object
      { tech: "./Icons/html.png" },
      { tech: "./Icons/css.png" },
      { tech: "./Icons/js.png" },
    ],
    backEnd: [
      { tech: "./Icons/wordpress.png" }, // Assuming each tech is an object
    ],
  },
  {
    deskImg: "./Projects/sibiro-02.png",
    mobImg: "./Projects/sibiro-01.png",
    title: "SIBIRO",
    description: "A furniture website made for a business from Russia.",
    floatIcon: "",
    frontEnd: [
      { tech: "./Icons/html.png" }, // Assuming each tech is an object
      { tech: "./Icons/css.png" },
      { tech: "./Icons/js.png" },
    ],
    backEnd: [
      { tech: "./Icons/mongodb.png" },
      { tech: "./Icons/express.png" },
      { tech: "./Icons/nodejs.png" },
    ],
  },
];

export default ProjectSection;
