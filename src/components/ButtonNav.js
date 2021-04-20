import React from "react";

const ButtonNav = ({ count, setCount }) => {
  return (
    <div className="btn2">
      <button onClick={() => setCount(count - 1)}>précedent</button>

      <button onClick={() => setCount(count + 1)}>suivant</button>
    </div>
  );
};

export default ButtonNav;
