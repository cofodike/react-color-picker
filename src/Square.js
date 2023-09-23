import React from "react";

const Square = ({ colorValue, hex, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty colorValue"}</p>
      <p>{hex ? hex : null} </p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};
export default Square;
