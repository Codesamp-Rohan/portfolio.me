import { motion } from "framer-motion";

const HomeCard = ({ isVisible, constraintsRef }) => {
  return (
    <>
      {cards.map((card, i) => {
        return (
          <motion.span
            key={i}
            drag
            dragConstraints={constraintsRef}
            animate={{ opacity: 1, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
            data-value={card.dataValue}
            className={`flex opacity-0 blur-[30px] absolute w-fit z-[200] cursor-pointer flex-col ${
              card.mobGap
            } ${card.deskGap} ${
              card.cardBgColor
            } p-2 md:p-6 rounded-xl md:rounded-[20px] ring-1 ${card.cardRing} ${
              card.deskRotate
            } ${card.mobileRotate} hover:shadow-xl duration-100 ${
              card.mobileLeftRight
            } ${card.deskLeftRight} ${card.mobileTop} ${card.deskTop} ${
              !isVisible ? card.hide : ""
            }`}>
            <span data-value={card.dataValue}>
              <img
                className={`${card.deskImg} ${card.mobImg}`}
                src={card.url}
                data-value={card.dataValue}></img>
              <p
                className="text-[10px] md:text-[14px] font-medium md:font-semibold text-[#444]"
                data-value={card.dataValue}>
                {card.title}
              </p>
              <p data-value="github." className="text-[8px] md:text-[12px]">
                {card.subTitle}
              </p>
            </span>
            <button
              data-value={card.dataValue}
              className={`p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] font-bold rounded-md md:rounded-full border-[1px] shadow-xl active:shadow-none ${card.deskButtonWidth} ${card.mobileButtonWidth} ${card.borderColor} ${card.buttonBgColor} ${card.mobileButtonWidth} ${card.deskButtonWidth} ${card.btnColor}`}>
              {card.button}
            </button>
          </motion.span>
        );
      })}
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
    </>
  );
};

const cards = [
  {
    title: "All about me",
    subTitle: "",
    button: "Wanna know?",
    url: "./account.png",
    hide: "hide--left",
    deskTop: "md:top-[40px]",
    mobileTop: "top-[10vh]",
    deskLeftRight: "md:left-0",
    mobileLeftRight: "left-0",
    deskRotate: "md:rotate-[-15deg]",
    mobileRotate: "rotate-[-15deg]",
    cardBgColor: "bg-[#f6eaff]",
    cardRing: "ring-[#bbb]",
    buttonBgColor: "bg-[#AC66DD]",
    borderColor: "border-[#822ebe]",
    mobileButtonWidth: "w-[120px]",
    deskButtonWidth: "md:w-auto",
    dataValue: "about me.",
    deskImg: "md:w-[35px]",
    mobImg: "w-[25px]",
    deskGap: "md:gap-[3rem]",
    mobGap: "gap-[12px]",
    btnColor: "text-[#fff]",
  },
  {
    title: "GitHub",
    subTitle: "@codesamp-rohan",
    button: "Follow",
    url: "./github.png",
    hide: "hide--right",
    deskTop: "md:top-[14vh]",
    mobileTop: "top-[4vh]",
    deskLeftRight: "md:right-[-100px]",
    mobileLeftRight: "right-[-100px]",
    deskRotate: "md:rotate-[-3deg]",
    mobileRotate: "rotate-[6deg]",
    cardBgColor: "bg-[#eee]",
    cardRing: "ring-[#bbb]",
    buttonBgColor: "bg-[#02040A]",
    borderColor: "border-[#777]",
    mobileButtonWidth: "w-[200px]",
    deskButtonWidth: "md:w-[300px]",
    dataValue: "github.",
    deskImg: "md:w-[35px]",
    mobImg: "w-[25px]",
    deskGap: "md:gap-[9rem]",
    mobGap: "gap-[8rem]",
    btnColor: "text-[#fff]",
  },
  {
    title: "LinkedIn",
    subTitle: "@rohan-chaudhary-399742255",
    button: "Follow",
    url: "./linkedin.png",
    hide: "hide--right",
    deskTop: "md:top-[50vh]",
    mobileTop: "top-[50vh]",
    deskLeftRight: "md:right-0",
    mobileLeftRight: "right-0",
    deskRotate: "md:rotate-[9deg]",
    mobileRotate: "rotate-[9deg]",
    cardBgColor: "bg-[#f2f9ff]",
    cardRing: "ring-[#bbb]",
    buttonBgColor: "bg-[#0B66C2]",
    borderColor: "border-[#224f7b]",
    mobileButtonWidth: "w-[120px]",
    deskButtonWidth: "md:w-[300px]",
    dataValue: "linkedin.",
    deskImg: "md:w-[35px]",
    mobImg: "w-[25px]",
    deskGap: "md:gap-[3rem]",
    mobGap: "gap-[2rem]",
    btnColor: "text-[#fff]",
  },
  {
    title: "Support",
    subTitle: "@codesamprohan",
    button: "Support",
    url: "./coffee.png",
    hide: "hide--left",
    deskTop: "md:top-[55vh]",
    mobileTop: "top-[64vh]",
    deskLeftRight: "md:left-[200px]",
    mobileLeftRight: "right-0",
    deskRotate: "md:rotate-[9deg]",
    mobileRotate: "rotate-[-15deg]",
    cardBgColor: "bg-[#fff8c7]",
    cardRing: "ring-[#bbb]",
    buttonBgColor: "bg-[#FFDD04]",
    borderColor: "border-[#9e8e23]",
    mobileButtonWidth: "w-[130px]",
    deskButtonWidth: "md:w-[150px]",
    dataValue: "buymeacoffee.",
    deskImg: "md:w-[35px]",
    mobImg: "w-[25px]",
    deskGap: "md:gap-[3rem]",
    mobGap: "gap-[2rem]",
    btnColor: "text-[#000]",
  },
];

export default HomeCard;
