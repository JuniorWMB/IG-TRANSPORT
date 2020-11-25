import React from "react";
import zxcvbn from "zxcvbn";

function ProgressBar({ password }) {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  const textProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "Très faible";
      case 1:
        return "Faible";
      case 2:
        return "Moyen";

      case 3:
        return "Fort";

      case 4:
        return "Très fort";
      default:
        return "";
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAd00";

      case 3:
        return "#9bc158";

      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: "100%",
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          // top: "365px",
          //   left: "25.5%",
        }}
      >
        <div
          style={{
            width: "305px",
            height: "5px",
            border: "0px solid grey",
            marginTop: "2px",
            borderRadius: "15px",
            background: "#bdc3c7",
            overflow: "hidden",
            position: "absolute",
            left: "-2px",
          }}
        >
          <div className="progress_bar" style={changePasswordColor()}></div>
        </div>
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5px",
          }}
        >
          <h3 style={{ color: funcProgressColor(), marginTop: "5px" }}>
            {textProgressColor()}
          </h3>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
