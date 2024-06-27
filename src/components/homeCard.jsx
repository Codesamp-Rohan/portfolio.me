const HomeCard = () => {
  return (
    <>
      <span
        data-value="know more about me."
        className="flex absolute z-[200] cursor-pointer flex-col gap-[12px] md:gap-[3rem] bg-[#f6eaff] p-4 md:p-6 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] rotate-[-15deg] hover:shadow-xl duration-300 left-0">
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
          className="bg-[#AC66DD] p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md md:rounded-full border-[1px] border-[#822ebe] shadow-xl text-[#fff] active:shadow-none">
          Wanna know?
        </button>
      </span>
      <span
        data-value="github."
        className="flex absolute z-[200] flex-col gap-[8rem] md:gap-[9rem] bg-[#eee] p-4 md:p-6 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] cursor-pointer rotate-[-3deg] hover:shadow-xl duration-300 top-0 right-0 text-black">
        <span data-value="github">
          <img
            className="w-[25px] md:w-[35px]"
            src="./linkedin.png"
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
          className="w-[200px] md:w-[300px] bg-[#02040A] p-2 md:py-2 md:px-4 text-[10px] md:text-[16px] rounded-md md:rounded-full border-[1px] border-[#777] shadow-xl text-[#fff] active:shadow-none flex gap-[10px] md:justify-evenly">
          <p data-value="github." className="font-extrabold">
            Follow
          </p>{" "}
          1.27k
        </button>
      </span>
      <span
        data-value="linkedin."
        className="flex absolute z-[200] flex-col gap-[2rem] md:gap-[3rem] bg-[#f2f9ff] p-4 md:p-6 rounded-xl md:rounded-[20px] ring-1 ring-[#bbb] cursor-pointer rotate-[9deg] hover:shadow-xl duration-300 top-[50vh] right-0">
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
      </span>
    </>
  );
};

export default HomeCard;
