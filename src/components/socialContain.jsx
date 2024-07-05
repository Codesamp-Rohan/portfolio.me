import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

const SocialComp = ({ socialRef, socialDivRef }) => {
  useEffect(() => {
    const container = socialDivRef.current;

    // Animate social content
    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 50%",
        // markers: true, // Enable markers for debugging (optional)
        toggleActions: "play none none none",
        scrub: true, // Create a smooth scrolling effect
      },
      duration: 2,
      width: "100vw",
      height: "100vh",
    });

    // Animate social heading opacity
    gsap.fromTo(
      socialRef.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 60%",
          end: "bottom 20%",
          // markers: true, // Enable markers for debugging (optional)
          toggleActions: "restart none none none",
          scrub: 1,
        },
        opacity: 1,
      }
    );
  }, []);

  return (
    <>
      <div className="flex bg-pink-400 justify-center relative">
        <div
          ref={socialDivRef}
          className="w-[70vw] h-[400px] bg-violet-600 relative">
          <img src="https://media.istockphoto.com/id/1291762523/photo/collage-with-plaster-head-model-and-female-portrait-modern-design-contemporary-colorful-art.jpg?s=612x612&w=0&k=20&c=uqECqYku_eMfjst02uacTwKlzpod1-j4UTforrBxUKc="></img>
          <h1 className="text-white uppercase cgFont text-[24px] p-2 md:text-[1.4rem]">
            Everyone should evolve with time, same does my
          </h1>
          <h1 className="text-white p-2 text-[4rem] cgFont md:text-[7rem] font-bold">
            PORTFOLIO!!!
          </h1>
          <img
            ref={socialRef}
            className="absolute w-[70%] md:w-[40%] bottom-0 right-0 z-[100]"
            src="https://t4.ftcdn.net/jpg/03/99/98/21/360_F_399982138_M625qx2oLqHIuUUIN69jhdtHOub4hJpt.jpg"></img>
        </div>
      </div>
      <div data-color="#D5FF43" className="section relative">
        <h1 className="cgFont sticky top-0 text-[4rem] text-[#000] pt-[40vh] md:text-[10rem] text-center">
          TOOOOOOLS
        </h1>
        <p className="sticky italic top-0 text-[4rem] pt-[50vh] text-[#000] md:pt-[65vh] md:text-[8rem] text-center">
          INSPIRATION
        </p>
        <div className="h-[60vh]"></div>
        <div className="relative flex flex-col gap-[20rem] h-[240vh] md:h-[400vh]">
          {tools.map((tool, index) => {
            return (
              <div
                key={index}
                className={`w-[60vw] backdrop-blur-sm md:w-[600px] absolute  p-4 ring-1 ring-[#000] 
  ${tool.desktop} ${tool.mobile} ${tool.desktoptop} ${tool.mobiletop}`}>
                <img
                  className="w-[100%] h-[30vh] object-cover ring-1 ring-[#eee]"
                  src={tool.img}></img>
                <h1 className="text-[#000] text-[2rem] font-bold">
                  {tool.name}
                </h1>
                <h1 className="text-[#000] text-[1rem] font-thin">
                  {tool.hindi}
                </h1>
                <a href={tool.link} target="_blank">
                  <button className="w-full mt-[2rem] p-4 bg-[#000] text-white">
                    Link
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const tools = [
  {
    name: "Colorhunt",
    hindi: "रंग शिकार",
    img: "./Tools/colorhunt.png",
    link: "https://colorhunt.co",
    desktop: "md:left-[10%]",
    mobile: "left-4",
    desktoptop: "top-0",
    mobiletop: "",
  },
  {
    name: "Figma",
    hindi: "फिग्मा",
    img: "https://cdn.sanity.io/images/599r6htc/regionalized/266ec07c0cfe14229530256bb9700e0bce7ff8d4-2400x1260.png?w=1200&q=70&fit=max&auto=format",
    link: "https://figma.com",
    desktop: "md:right-[10%]",
    mobile: "right-4",
    desktoptop: "top-[25%]",
    mobiletop: "",
  },
  {
    name: "Awwwards",
    hindi: "पुरररस्कार",
    img: "https://www.bookmarks.design/media/image/awwwards.jpg",
    link: "https://awwwards.com",
    desktop: "md:left-[30%]",
    mobile: "left-4",
    desktoptop: "top-[50%]",
    mobiletop: "",
  },
  {
    name: "Dribbble",
    hindi: "ड्रिबबबल",
    img: "https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp",
    link: "https://dribbble.com",
    desktop: "md:left-[40%]",
    mobile: "right-4",
    desktoptop: "top-[75%]",
    mobiletop: "",
  },
];

export default SocialComp;
