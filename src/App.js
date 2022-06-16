import "./App.css";
import axios from "axios";

import domtoimage from "dom-to-image";
import { useEffect, useState, useRef } from "react";
import Meme from "./components/Meme";
import Error from "./components/Error";
import MemeTextForm from "./components/MemeTextForm";
import SelectPicButtons from "./components/SelectPicButtons";
import ActionButtons from "./components/ActionButtons";
function App() {
  const [memes, setMemes] = useState();
  const [isError, setIsError] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const [memeText, setMemeText] = useState({ topText: "", bottomText: "" });
  const [customPic, setCustomPic] = useState(null);

  const memeRef = useRef(null);

  const getMemes = async () => {
    const {
      data: {
        success,
        data: { memes },
      },
    } = await axios.get("https://api.imgflip.com/get_memes");

    if (success) setMemes(memes);
    else setIsError(true);
  };

  useEffect(() => {
    getMemes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemeText({ ...memeText, [name]: value });
  };

  const handleRandomPicture = () => {
    setMemeText({});
    setCustomPic(null);
    setRandomIndex(Math.floor(Math.random() * memes.length));
  };

  const handlePictureUpload = (e) => {
    const { files } = e.target;
    const { name } = files[0];
    const picUrl = URL.createObjectURL(files[0]);
    setCustomPic({ picUrl, name });
  };

  const handleDownload = async () => {
    const dataUrl = await domtoimage.toJpeg(memeRef.current, { quality: 0.95 });

    const link = document.createElement("a");
    link.download = `my-meme-${Date.now()}.jpeg`;
    link.href = dataUrl;
    link.click();
  };

  const handleReset = () => {
    setMemeText({});
    setCustomPic(null);
    setRandomIndex(0);
  };
  return (
    <>
      <h1>Meme Factory</h1>

      <MemeTextForm handleChange={handleChange} memeText={memeText} />

      {isError && <Error />}

      <SelectPicButtons
        handleRandomPicture={handleRandomPicture}
        handlePictureUpload={handlePictureUpload}
      />

      {memes && (
        <Meme
          memeRef={memeRef}
          memes={memes}
          randomIndex={randomIndex}
          memeText={memeText}
          customPic={customPic}
        />
      )}
      <ActionButtons
        handleDownload={handleDownload}
        handleReset={handleReset}
      />
    </>
  );
}

export default App;
