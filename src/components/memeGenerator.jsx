import React, { useState } from "react";
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

  return (
    <>
      <div className="h-[60vh] bg-[#000]"></div>
      <div
        data-bgcolor="#fff"
        data-textcolor="#000"
        className="flex flex-col bg-[#000] items-center relative">
        <h1 className="font-bold goBold text-[2rem] md:text-[6rem]">
          time for some meme
        </h1>
        <form
          className="w-[95vw] md:w-[60vw] rounded-3xl flex flex-col items-center bg-[#fff] p-4 gap-10 shadow-xl"
          onSubmit={handleSubmit}>
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
              className="md:h-[40vh] rounded-lg shadow-2xl"
            />
            <h1 className="meme--text bottom">{memeImage.bottomText}</h1>
          </div>
          <button className="w-full bg-violet-600 rounded-full p-3 text-[#fff] font-bold form-button">
            Generate Meme
          </button>
        </form>
        <div
          data-value="it is not going to work!!!"
          className="p-4 bg-[#ffbdbd] md:absolute mt-[40px] md:mt-auto rounded-2xl left-[100px] top-[30%] md:rotate-[-14deg] ring-1 ring-[red] flex flex-col gap-10">
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
        <div className="h-[60vh]"></div>
      </div>
    </>
  );
}
