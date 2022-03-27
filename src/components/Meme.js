import "./Meme.css";

const Meme = ({
  memes,
  randomIndex,
  memeText: { bottomText, topText },
  customPic,
  memeRef,
}) => {
  return (
    <>
      <div className="Meme" ref={memeRef}>
        <img
          src={customPic?.picUrl ?? memes[randomIndex].url}
          alt={customPic?.name ?? memes[randomIndex].name}
        />
        <p className="top">{topText}</p>
        <p className="bottom">{bottomText}</p>
      </div>
    </>
  );
};
export default Meme;
