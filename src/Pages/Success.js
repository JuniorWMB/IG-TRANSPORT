import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Success = () => {
  let history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <p>Merci, nous vous recontacterons au plus vite.</p>
    </div>
  );
};

export default Success;
