import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MemeGenerator() {
  const [allMemes, setAllMemes] = useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    fetchData();
  }, []);

  function getMemeImage() {
    var meme1 = allMemes;
    meme1 = meme1[Math.floor(Math.random() * meme1.length)];
    meme1 = meme1.url;
    return meme1;
  }

  const [memeImage, setmemeImage] = useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  function changeMeme(event) {
    const { name, value } = event.target;
    setmemeImage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(meme);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(memeImage);
    setmemeImage((prevState) => ({
      ...prevState,
      image: getMemeImage(),
    }));
  }

  gsap.to(".generator--div", {
    scrollTrigger: {
      trigger: ".generator--div",
      scrub: true,
      start: "top center",
      end: "bottom center",
      // markers: true,
    },
    opacity: 1,
  });

  return (
    <>
      <div
        data-color="#131842"
        className="section flex flex-col pt-[30vh] items-center relative">
        <h1 className="font-bold text-[#fff] uppercase text-[1rem] md:text-[2rem] ">
          time for some meme
        </h1>
        <form
          className="w-[90vw] md:w-[60vw] rounded-3xl flex flex-col items-center bg-violet-200 ring-violet-700 ring-1 p-4 gap-10 shadow-xl"
          onSubmit={handleSubmit}>
          <span>
            <span className="flex gap-4">
              <input
                type="text"
                className="w-[100%] p-2 bg-[#fff] ring-1 ring-[#bbb] rounded-lg text-[#bbb]"
                placeholder="Meme top text"
                name="topText"
                value={memeImage.topText}
                onChange={changeMeme}
              />
              <input
                type="text"
                className="w-[100%] p-2 bg-[#fff] ring-1 ring-[#bbb] rounded-lg text-[#bbb]"
                placeholder="Meme bottom text"
                name="bottomText"
                value={memeImage.bottomText}
                onChange={changeMeme}
              />
            </span>
            <div className="meme relative">
              <h1 className="meme--text top absolute text-white left-[50%] translate-x-[-50%]">
                {memeImage.topText}
              </h1>
              <img
                src={memeImage.image}
                alt="meme"
                className="md:h-[50vh] rounded-lg shadow-2xl"
              />
              <h1 className="meme--text bottom">{memeImage.bottomText}</h1>
            </div>
          </span>
          <button className="w-full bg-violet-600 rounded-full p-3 text-[#fff] font-bold form-button">
            Generate Meme
          </button>
        </form>
        <div
          data-value="it is not going to work!!!"
          className="p-4 bg-[#ffbdbd] md:absolute w-[90vw] md:w-auto mt-[40px] md:mt-auto z-[100] rounded-2xl left-[100px] top-[50%] md:rotate-[-14deg] ring-1 ring-[red] flex flex-col gap-10">
          <span>
            <h1
              data-value="it is not going to work!!!"
              className="text-[#000] font-bold">
              Now do not ask me for <br />a download button please!!!
            </h1>
            <h1
              data-value="it is not going to work!!!"
              className="text-[#333] font-semibold">
              अब मुझसे डाउनलोड बटन न मांगें
            </h1>
          </span>
          <button
            data-value="it is not going to work!!!"
            className="bg-[red] w-full rounded-lg text-[#fff] font-extrabold p-2"
            type="button"
            onClick={() => alert("Screeshot le yrrr!!!")}>
            Download
          </button>
        </div>
        <div className="generator--div opacity-0 w-[200px] mobile--hide p-2 bg-pink-400 md:block absolute left-10 rotate-12 top-[30%] rounded-xl overflow-hidden">
          <img
            className="rounded-lg"
            src="https://miro.medium.com/v2/resize:fit:1400/1*Yb2W5n4-ZyQZ8ggggHGCZA.png"></img>
        </div>
        <div className="generator--div opacity-0 w-[240px] mobile--hide p-2 bg-violet-500 md:block absolute right-20 rotate-[-24deg] top-[20%] rounded-xl overflow-hidden">
          <img
            className="rounded-lg"
            src="https://gitpiper.com/assets/memes/programming-meme-ff7166d5-d272-4fce-8e30-cef42a514420.webp"></img>
        </div>
        <div className="generator--div opacity-0 w-[240px] mobile--hide p-2 bg-green-300 md:block absolute right-20 rotate-[20deg] bottom-[25%] rounded-xl overflow-hidden">
          <img
            className="rounded-lg"
            src="https://www.codewithfaraz.com/blog_img/designers%20vs%20programmers.jpg"></img>
        </div>
        <div className="h-[40vh]"></div>
      </div>
    </>
  );
}
