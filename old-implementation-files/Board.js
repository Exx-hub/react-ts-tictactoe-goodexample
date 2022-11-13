import React, { useEffect, useRef, useState } from "react";
import circle from "../assets/circle.png";
import ekis from "../assets/ekis.jpg";
import black from "../assets/black.png";

function Board() {
  // changes player turn
  const [player, setPlayer] = useState(2);
  // console.log(player);

  // check for tied game
  const [clickCount, setClickCount] = useState(0);
  // console.log(clickCount);

  const [boxId, setBoxId] = useState(null);
  // console.log(boxId);

  const [selected, setSelected] = useState([]);
  console.log(selected);

  // check for tied game
  useEffect(() => {
    if (clickCount === 9) {
      alert("Game End!");
    }
  }, [clickCount]);

  const handleClick = (e) => {
    // e.stopPropagation();
    console.log(e.target);
    e.target.classList.add("disabled");

    setBoxId(e.target.id);
    setSelected([...selected, e.target.id]);

    if (player === 1) {
      e.target.setAttribute("src", circle);
      e.target.setAttribute("alt", "circle");

      setPlayer(2);
    } else {
      e.target.setAttribute("src", ekis);
      e.target.setAttribute("alt", "ekis");
      setPlayer(1);
    }
    setClickCount((prev) => prev + 1);
  };

  const handleDivClick = (e) => {
    // e.stopPropagation();
    console.log(e.target.id);
  };

  const handleParentClick = () => console.log("parent was clicked");

  return (
    <div className="board" onClick={handleParentClick}>
      <div className="box" id="1" onClick={handleDivClick}>
        <img src={black} alt="" id="1" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" id="2" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" id="3" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" onClick={(e) => handleClick(e)} />
      </div>
      <div className="box">
        <img src={black} alt="" onClick={(e) => handleClick(e)} />
      </div>
    </div>
  );
}

export default Board;
