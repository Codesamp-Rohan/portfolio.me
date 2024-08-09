/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProjectSection = ({ isMobile }) => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
  };

  useEffect(() => {
    if (activeProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [activeProject]);

  return (
    <div data-color="#000" className="section flex flex-col items-center">
      <div className="section h-[60vh]"></div>
      <div className="section">
        <Project
          isMobile={isMobile}
          ProjectDetails={ProjectDetails}
          activeProject={activeProject}
          onProjectClick={handleProjectClick}
          onClose={closeProject}
        />
      </div>
    </div>
  );
};

const Project = ({
  ref,
  scrollYProgress,
  isMobile,
  ProjectDetails,
  activeProject,
  onProjectClick,
  onClose,
}) => {
  return (
    <>
      <h1 className="section text-white font-bold text-[18px] w-full text-center pb-[30px] relative z-[100]">
        Projects
      </h1>
      <div className="flex flex-col items-center md:w-full gap-[5rem] bg-transparent relative">
        <div
          className={`w-[100vw] overflow-y-scroll duration-500 ease-out p-10 bg-[#eee] z-[999] fixed top-0 ${
            activeProject
              ? `h-full scale-1 pointer-events-auto`
              : `h-0 scale-0 pointer-events-none`
          }`}>
          <nav className="fixed right-10">
            <button onClick={onClose}>close.</button>
          </nav>
          {activeProject && (
            <>
              <h1 className="text-[3rem] md:text-[10rem] uppercase font-bold sticky top-10">
                {activeProject.title}
              </h1>
              <p className="w-[100%] md:w-[65%] md:pl-3 sticky top-[15vh] md:top-[30vh]">
                {activeProject.description}
              </p>
              <div className="relative z-[999] flex flex-col mt-[40%] gap-10 md:mt-auto md:gap-0">
                <img
                  className="w-[100vw] md:w-[60vw] shadow-2xl shadow-[#777] relative md:absolute md:right-0 md:top-0"
                  src={activeProject.img1}></img>
                <img
                  className="w-[90vw] md:w-[30vw] shadow-2xl  relative md:absolute md:right-0 md:top-[80vh]"
                  src={activeProject.img2}></img>
                <img
                  className="w-[100vw] md:w-[60vw] shadow-2xl relative md:absolute md:right-0 md:top-[200vh]"
                  src={activeProject.img3}></img>
              </div>
            </>
          )}
        </div>
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
                        <p>No Backend Technologies Listed</p>
                      )}
                    </span>
                  </span>
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => onProjectClick(detail)}
                  className="bg-[#000] text-[#fff] rounded-full text-[14px] md:text-[18px] font-bold w-3/4 md:w-full p-3 outline-none">
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
    link: "https://holesail.io",
    linkColor: "",
    img1: "./Projects/holesail-03.png",
    img2: "./Projects/holesail-01.png",
    img3: "./Projects/holesail-02.png",
    dataValue: 1,
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
    link: "https://3siixtin.com",
    linkColor: "",
    img1: "./Projects/3siixtin-03.png",
    img2: "./Projects/3siixtin-04.png",
    img3: "./Projects/3siixtin-05.png",
    dataValue: 2,
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
    link: "https://sibiro.ru",
    linkColor: "",
    img1: "./Projects/sibiro-03.png",
    img2: "./Projects/sibiro-04.png",
    img3: "./Projects/sibiro-05.png",
    dataValue: 3,
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
    link: "https://docyard.co.in",
    linkColor: "",
    img1: "./Projects/docyard-03.png",
    img2: "./Projects/docyard-04.png",
    img3: "./Projects/docyard-05.png",
    dataValue: 4,
  },
];

export default ProjectSection;
