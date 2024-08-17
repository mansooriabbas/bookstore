import React from "react";
import "./Main.css"
const renderBoxes = () => {
  const boxes = [];
  for (let i = 0; i < 10; i++) {
    boxes.push(<p className="box" key={i}>box{i + 1}</p>);
  }
  return boxes;
};
renderBoxes();

export const Main = () => {
  return (
    <div id="main">
      <h2>Main content</h2>
      {renderBoxes()}
    </div>
  );
};
