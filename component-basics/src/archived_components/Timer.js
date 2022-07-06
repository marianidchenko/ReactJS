import React from "react";

export const Timer = (props) => {
  const [time, setTime] = React.useState(0);

  setTimeout(() => {
    if (time < 10) {
      setTime(time + 1);
    }
  }, 1000);

  return (
    <div>
      <h2>Timer: {time}s</h2>
    </div>
  );
};
