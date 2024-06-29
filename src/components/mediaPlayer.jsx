import { useEffect, useState } from "react";

const MediaPlayer = () => {
  const [music, setMusic] = useState([]);

  const getMusic = async () => {
    const url =
      "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "12574adb18mshebcbb938f505f9dp160446jsn3fad139a6c04",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
        "X-RapidAPI-Mock-Response": "10",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMusic(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMusic();
  }, []);
  return (
    <div>
      {music?.users?.items?.map((musicData, index) => {
        // eslint-disable-next-line react/jsx-key
        return (
          <img
            key={index}
            src={musicData?.data?.image?.largeImageUrl}
            alt="icon"
          />
        );
      })}
    </div>
  );
};

export default MediaPlayer;
