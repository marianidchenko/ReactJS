import { useState } from "react";

export const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = (e) => {
    setClicks((oldClicks) => oldClicks + 1);
  };

  return (
    <div>
      <h3>{clicks > 10 ? "more than 10 clicks" : ""}</h3>
      <button onClick={clickHandler}>{clicks}</button>
    </div>
  );
};
