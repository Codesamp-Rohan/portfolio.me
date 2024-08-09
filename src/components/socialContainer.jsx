import gsap from "gsap";

const SocialContainer = () => {
  gsap.to(".social--middle", {
    scrollTrigger: {
      trigger: ".social--middle",
      start: "top 0%",
      end: "bottom 0%",
      //   markers: true,
      scrub: true,
    },
    width: "100vw",
    height: "100vh",
  });

  gsap.to(".social--box", {
    scrollTrigger: {
      trigger: ".social--box",
      start: "top -100%",
      end: "bottom -150%",
      scrub: true,
      //   markers: true,
    },
    width: "100vw",
    height: "100vh",
  });
  gsap.to(".my--img", {
    scrollTrigger: {
      trigger: ".social--box",
      start: "top -100%",
      end: "bottom -150%",
      scrub: true,
      //   markers: true,
    },
    scale: 2,
  });

  return (
    <div className="flex justify-center w-screen bottom--div--height">
      <div className="social--middle flex items-center justify-center sticky top-0 w-[40vw] h-[40vh] md:w-[600px] md:h-[600px]">
        <div className="social--box sticky top-40 w-[400px] h-[400px]">
          <img
            className="my--img w-[200px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            src="https://images.bitmoji.com/3d/avatar/36722684-100845834104_5-s5-v1.webp"></img>
          <span
            data-value="GitHub."
            className={`flex w-[200px] md:w-[300px] absolute z-[200] cursor-pointer flex-col gap-[12px] md:gap-[3rem] bg-[#f6eaff] p-2 md:p-6 rounded-xl ring-1 ring-[#bbb] left-[-50%] md:left-[-80%] hover:shadow-xl rotate-[-11deg] duration-100`}>
            <span data-value="GitHub.">
              <img
                className="w-[25px] md:w-[35px]"
                src="./github.png"
                data-value="GitHub."></img>
              <p
                className="text-[10px] md:text-[14px] font-medium md:font-semibold text-[#444]"
                data-value="GitHub.">
                GitHub
              </p>
              <p className="text-[12px]">@codesamp-rohan</p>
            </span>
            <a
              href="https://github.com/codesamp-rohan"
              target="_blank"
              data-value="GitHub."
              className="bg-[#02040A] text-center font-extrabold p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md shadow-xl text-[#fff] active:shadow-none">
              Follow
            </a>
          </span>
          <span
            data-value="GitHub."
            className={`flex w-[200px] md:w-[300px] absolute z-[200] cursor-pointer flex-col gap-[12px] md:gap-[3rem] bg-[#f6eaff] p-2 md:p-6 rounded-xl ring-1 ring-[#bbb] right-[-60%] md:right-[-80%] hover:shadow-xl rotate-[-11deg] duration-100 top-[30vh]`}>
            <span data-value="GitHub.">
              <img
                className="w-[25px] md:w-[35px]"
                src="./linkedin.png"
                data-value="GitHub."></img>
              <p
                className="text-[10px] md:text-[14px] font-medium md:font-semibold text-[#444]"
                data-value="GitHub.">
                LinkedIn
              </p>
              <p className="text-[12px]">@rohan-chaudhary-3997355</p>
            </span>
            <a
              href="https://www.linkedin.com/in/rohan-chaudhary-399742255/"
              target="_blank"
              data-value="GitHub."
              className="bg-[#0B66C2] text-center font-extrabold p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md shadow-xl text-[#fff] active:shadow-none">
              Follow
            </a>
          </span>
          <span
            data-value="GitHub."
            className={`flex w-[200px] md:w-[300px] absolute z-[200] cursor-pointer flex-col gap-[12px] md:gap-[3rem] bg-[#f6eaff] p-2 md:p-6 rounded-xl ring-1 ring-[#bbb] right-[-60%] top-[10%] md:top-0 md:right-[-80%] hover:shadow-xl rotate-[18deg] duration-100`}>
            <span data-value="GitHub.">
              <img
                className="w-[25px] md:w-[35px]"
                src="./coffee.png"
                data-value="GitHub."></img>
              <p
                className="text-[10px] md:text-[14px] font-medium md:font-semibold text-[#444]"
                data-value="GitHub.">
                Support
              </p>
              <p className="text-[12px]">@codesamprohan</p>
            </span>
            <a
              href="https://buymeacoffee.com/codesamprohan"
              target="_blank"
              data-value="GitHub."
              className="bg-[#FFDD04] text-center font-extrabold p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md shadow-xl text-[#000] active:shadow-none">
              Support
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialContainer;
