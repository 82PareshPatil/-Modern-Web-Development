import { useState } from "react";

function Ludo() {
  const [move, setMove] = useState({ blue: 0, red: 0, ye: 0, gr: 0 });
  const [ch,setch] = useState(["no move"])
  const change = (color) => {
    setMove((prevMove) => ({
      ...prevMove,
      [color]: prevMove[color] + 1,

    }));
    setch((newCh) => {
  return [...newCh, "next move"];
});

  };


  return (
    <div>
      <p>Welcome! to Ludo board</p>
      <div>
        <p>Blue: {move.blue}</p>
        <p>{ch}</p>
        <button onClick={() => change("blue")}>Blue +1</button>

        <p>Red: {move.red}</p>
        <button onClick={() => change("red")}>Red +1</button>

        <p>Yellow: {move.ye}</p>
        <button onClick={() => change("ye")}>Yellow +1</button>

        <p>Green: {move.gr}</p>
        <button onClick={() => change("gr")}>Green +1</button>
      </div>
    </div>
  );
}

export { Ludo };
