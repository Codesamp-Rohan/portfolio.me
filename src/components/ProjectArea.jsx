/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ProjectSection = ({ isMobile }) => {
  return (
    <div data-color="#000" className="section flex flex-col items-center">
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
      <h1 className="section text-white font-bold text-[18px] w-full text-center pb-[30px] relative z-[100]">
        Projects
      </h1>
      <div className="flex flex-col w-full gap-[5rem] bg-transparent">
        {ProjectDetails.map((detail, i) => {
          return (
            <motion.div
              key={i}
              ref={ref}
              style={{
                scale: scrollYProgress,
              }}
              className={`relative cursor-pointer z-[900] flex flex-col justify-between flex-wrap w-[90vw] md:w-[60vw] bg-[#fff] text-[#000] gap-[10px] duration-100 rounded-3xl p-4 md:p-5`}>
              <img
                className={`rounded-2xl w-full h-[40vh] ring-1 ring-[#000] object-cover ${
                  isMobile ? `h-[40vh]` : `max-h-[40vh] h-auto`
                }`}
                src={isMobile ? detail.mobImg : detail.deskImg}></img>
              <div className="flex flex-col justify-between gap-[10px] mb-[20px]">
                <span className="flex items-center gap-4">
                  <img
                    className="w-[30px] rounded-full"
                    src={detail.icon}></img>
                  <span>
                    <h2 className="font-bold text-[12px] text-[#000] md:text-[16px]">
                      {detail.title}
                    </h2>
                    <p className="text-[8px] md:text-[12px] text-[#444]">
                      {detail.description}
                    </p>
                  </span>
                </span>
                <span className="flex flex-row md:flex-col justify-between gap-2">
                  <span className="flex flex-col md:items-start">
                    <p className="text-[12px] font-semibold md:text-[16px]">
                      Frontend
                    </p>
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
                  <span className="flex flex-col md:items-start">
                    <p className="text-[12px] font-semibold md:text-[16px]">
                      Backend
                    </p>
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
              <div className="flex gap-3">
                <button className="bg-[#000] text-[#fff] rounded-full text-[14px] md:text-[18px] font-bold w-3/4 md:w-full p-3 outline-none">
                  Detail
                </button>
                <div
                  data-value="Link!!!"
                  className="relative md:absolute py-2 bg-[#eee] md:bg-[#77ff3d] text-[#000] md:rotate-[-14deg] rounded-full w-1/4 md:w-[100px] text-center md:right-[-40px] md:bottom-[20%] ring-[0.5px] ring-[#777]">
                  <a
                    data-value="Link!!!"
                    href={detail.link}
                    target="_blank"
                    className="font-light text-[14px]">
                    लिंक
                  </a>
                </div>
              </div>
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
      { tech: "./Icons/css.png" },
    ],
    backEnd: [
      { tech: "./Icons/nodejs.png" }, // Assuming each tech is an object
      { tech: "./Icons/express.png" },
    ],
    icon: "./ProjectIcon/holesail--logo.webp",
    link: "http://holesail.io",
    linkColor: "",
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
    icon: "./ProjectIcon/holesail--logo.webp",
    link: "http://3siixtin.com",
    linkColor: "",
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
    icon: "./ProjectIcon/sibiro--logo.svg",
    link: "http://sibiro.ru",
    linkColor: "",
  },
  {
    deskImg: "./Projects/docyard-01.png",
    mobImg: "./Projects/docyard-02.png",
    title: "Docyard",
    description: "A marketing, web and app development agencies website.",
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
    icon: "./ProjectIcon/docyard--logo.png",
    link: "http://sibiro.ru",
    linkColor: "",
  },
];

export default ProjectSection;
