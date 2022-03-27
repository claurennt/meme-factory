import React from "react";

const SelectPicButtons = ({ handleRandomPicture, handlePictureUpload }) => (
  <>
    <button onClick={handleRandomPicture}>Get random picture</button>
    <label htmlFor="file-upload" className="custom-file-upload">
      Wanna use your picture instead?{" "}
    </label>
    <input type="file" id="file-upload" onChange={handlePictureUpload} />
  </>
);

export default SelectPicButtons;
