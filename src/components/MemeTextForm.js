import React from "react";

const MemeTextForm = ({ handleChange, memeText }) => (
  <form>
    <label htmlFor="top-text">Top Text</label>
    <input
      type="text"
      id="top-text"
      name="topText"
      value={memeText.topText ?? ""}
      onChange={handleChange}
    />
    <label htmlFor="bottom-text">Bottom Text</label>{" "}
    <input
      type="text"
      id="bottom-text"
      name="bottomText"
      value={memeText.bottomText ?? ""}
      onChange={handleChange}
    />
  </form>
);

export default MemeTextForm;
