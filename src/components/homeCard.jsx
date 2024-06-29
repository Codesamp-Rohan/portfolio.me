import { motion } from "framer-motion";

const HomeCard = ({ isVisible, constraintsRef }) => {
  return (
    <>
      <motion.span
        drag
        dragConstraints={constraintsRef}
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        data-value="know more about me."
        className={`flex opacity-0 blur-[30px] absolute z-[200] cursor-pointer flex-col gap-[12px] md:gap-[3rem] bg-[#f6eaff] p-2 md:p-6 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] rotate-[-15deg] hover:shadow-xl duration-100 top-[10vh] md:top-[40px] left-0 ${
          !isVisible ? "hide--left" : ""
        }`}>
        <span data-value="know more about me.">
          <img
            className="w-[25px] md:w-[35px]"
            src="./account.png"
            data-value="know more about me."></img>
          <p
            className="text-[10px] md:text-[14px] font-medium md:font-semibold text-[#444]"
            data-value="know more about me.">
            All About Me
          </p>
        </span>
        <button
          data-value="know more about me."
          className="bg-[#AC66DD] w-[120px] md:w-auto p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md md:rounded-full border-[1px] border-[#822ebe] shadow-xl text-[#fff] active:shadow-none">
          Wanna know?
        </button>
      </motion.span>
      <motion.span
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
        drag
        dragConstraints={constraintsRef}
        data-value="github."
        className={`flex absolute opacity-0 blur-[30px]  z-[200] flex-col gap-[8rem] md:gap-[9rem] bg-[#eee] p-4 md:p-6 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] cursor-pointer rotate-[6deg] md:rotate-[-3deg] hover:shadow-xl duration-100 top-[4vh] md:top-[14vh] right-[-100px] text-black ${
          !isVisible ? "hide--right" : ""
        }`}>
        <span data-value="github">
          <img
            className="w-[25px] md:w-[35px]"
            src="./github.png"
            data-value="github."></img>
          <p
            className="text-[14px] md:text-[18px] font-medium md:font-semibold text-[#000]"
            data-value="github.">
            My GitHub
          </p>
          <p data-value="github." className="text-[8px] md:text-[12px]">
            @Codesamp-Rohan
          </p>
        </span>
        <button
          data-value="github."
          className="w-[200px] md:w-[300px] bg-[#02040A] p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md border-[1px] border-[#777] shadow-xl text-[#fff] active:shadow-none flex gap-[10px] md:justify-evenly">
          <p data-value="github." className="font-extrabold">
            Follow
          </p>{" "}
        </button>
      </motion.span>
      <motion.span
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        drag
        dragConstraints={constraintsRef}
        data-value="linkedin."
        className={`flex absolute opacity-0 blur-[30px]  z-[200] flex-col gap-[2rem] md:gap-[3rem] bg-[#f2f9ff] p-4 md:p-6 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] cursor-pointer rotate-[9deg] hover:shadow-xl duration-100 top-[50vh] right-0 ${
          !isVisible ? "hide--right" : ""
        }`}>
        <span data-value="linkedin">
          <img
            className="w-[25px] md:w-[35px]"
            src="./linkedin.png"
            data-value="linkedin."></img>
          <p
            className="text-[14px] md:text-[18px] font-medium md:font-semibold text-[#444]"
            data-value="linkedin.">
            My LinkedIn
          </p>
          <p data-value="linkedin." className="text-[8px] md:text-[12px]">
            @rohan-chaudhary-399742255
          </p>
        </span>
        <button
          data-value="linkedin."
          className="bg-[#0B66C2] p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md md:rounded-full border-[1px] border-[#224f7b] shadow-xl text-[#fff] active:shadow-none flex gap-[10px] md:justify-evenly">
          <p data-value="linkedin." className="font-extrabold">
            Follow
          </p>{" "}
          1.27k
        </button>
      </motion.span>
      <motion.span
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        drag
        dragConstraints={constraintsRef}
        data-value="my pic."
        className={`flex absolute z-[100] opacity-0 blur-[30px] flex-col gap-[2rem] md:gap-[3rem] bg-[#f2f9ff] p-2 md:p-4 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] cursor-pointer rotate-[5deg] md:rotate-[2deg] hover:shadow-xl duration-100 top-[50vh] md:top-[20vh] left-4 ${
          !isVisible ? "hide--left" : ""
        }`}>
        <img
          className="w-[130px] md:w-[300px] rounded-lg"
          src="./snapRohan.png"
          data-value="my pic."></img>
      </motion.span>
      <motion.span
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
        drag
        dragConstraints={constraintsRef}
        data-value="चरन्मार्गान्विजानाति |"
        className="flex absolute opacity-0 blur-[30px]  z-[900] flex-col gap-[2rem] md:gap-[3rem] bg-transparent p-2 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] cursor-pointer rotate-[5deg] md:rotate-[2deg] hover:shadow-xl duration-100 top-[25vh] md:top-[10vh] left-10 md:left-[20%]">
        <img
          data-value="चरन्मार्गान्विजानाति |"
          className="w-[20px] sm:w-[40px]"
          src="./heart.png"></img>
      </motion.span>
      <motion.span
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 2 }}
        drag
        dragConstraints={constraintsRef}
        data-value="support."
        className={`flex w-fit absolute z-[200] opacity-0 blur-[30px]  flex-col gap-[2rem] md:gap-[3rem] bg-[#fff8c7] p-4 md:p-6 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] cursor-pointer rotate-[-15deg] md:rotate-[9deg] hover:shadow-xl duration-100 md:top-[55vh] top-[64vh] right-0 md:left-[200px] ${
          !isVisible ? "hide--left" : ""
        }`}>
        <span data-value="support">
          <img
            className="w-[25px] bg-[#FFDD04] rounded-lg p-[5px] md:w-[35px]"
            src="./coffee.png"
            data-value="support."></img>
          <p
            className="text-[14px] md:text-[18px] font-medium md:font-semibold text-[#444]"
            data-value="support.">
            Support
          </p>
        </span>
        <button
          data-value="support."
          className="bg-[#FFDD04] w-[140px] p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md border-[1px] border-[#9e8e23] shadow-xl text-[#000] active:shadow-none flex gap-[10px] md:justify-evenly">
          <p data-value="support." className="font-bold">
            Support
          </p>
        </button>
      </motion.span>
    </>
  );
};

export default HomeCard;
