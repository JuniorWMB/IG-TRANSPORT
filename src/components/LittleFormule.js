import React from "react";
import {
  faPiggyBank,
  faUserShield,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LittleFormule = ({ packName, setToggleBloks, toggleBlocks }) => {
  // const [toggleBlocks, setToggleBloks] = useState(0);
  // const [, ] = useState("");

  const toggleBlock = (index) => {
    setToggleBloks(index);
  };

  console.log("packName", packName);
  return (
    <div className="littleformule__contain ">
      <div
        className={
          toggleBlocks === 1
            ? " little__border"
            : "littleformule__contain__block"
        }
        onClick={() => toggleBlock(1)}
        // onClick={toggleBlock()}
      >
        <div className="titleAndLogo">
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faPiggyBank}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue">
            <h3 className="pack__title little__formule__title">
              basic
              <br />
            </h3>
          </div>
        </div>
        <div className="littleformule__box">
          <h3 className="pack__price">30€</h3>
        </div>
      </div>

      <div
        className={
          toggleBlocks === 2
            ? " little__border"
            : "littleformule__contain__block"
        }
        onClick={() => toggleBlock(2)}
      >
        <div className="titleAndLogo">
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faGem}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue">
            <h3 className="pack__title little__formule__title">
              eco +
              <br />
            </h3>
          </div>
        </div>
        <div className="littleformule__box">
          <h3 className="pack__price">45€</h3>
        </div>
      </div>

      <div
        className={
          toggleBlocks === 3
            ? " little__border"
            : "littleformule__contain__block"
        }
        onClick={() => toggleBlock(3)}
      >
        <div className="titleAndLogo">
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faUserShield}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue">
            <h3 className="pack__title little__formule__title">
              securité
              <br />
            </h3>
          </div>
        </div>
        <div className="littleformule__box">
          <h3 className="pack__price">60€</h3>
        </div>
      </div>

      <div
        className={
          toggleBlocks === 4
            ? " little__border"
            : "littleformule__contain__block"
        }
        onClick={() => toggleBlock(4)}
      >
        <div className="titleAndLogo">
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faGem}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue ">
            <h3 className="pack__title little__formule__title">
              Premium
              <br />
            </h3>
          </div>
        </div>
        <div className="littleformule__box">
          <h3 className="pack__price">80€</h3>
        </div>
      </div>
    </div>
  );
};

export default LittleFormule;
