import React from "react";
import colorNames from "colornames";
const Input = ({
  colorValue,
  setColorValue,
  hex,
  setHex,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter a color:</label>
      <br />
      <input
        type="text"
        id="search"
        placeholder="Add color name"
        name="userInput"
        autoFocus
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHex(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
