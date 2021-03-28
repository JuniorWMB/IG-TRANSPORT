import React from "react";

const ButtonNav = ({ count, setCount }) => {
  return (
    <div className="btn2">
      <button onClick={() => setCount(count - 1)}>PREVIOUS</button>

      <button onClick={() => setCount(count + 1)}>NEXT</button>
    </div>
  );
};

export default ButtonNav;
