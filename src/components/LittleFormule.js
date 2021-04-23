import React, { useEffect } from "react";
import {
  faPiggyBank,
  faUserShield,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LittleFormule = ({
  packName,
  setToggleBloks,
  toggleBlocks,
  setTotalFormule,
  kiloDistance,
  portageGeneraleTotal,
  totalBasket,
  volumeCalcul,
}) => {
  const toggleBlock = (index) => {
    setToggleBloks(index);
  };

  let basic =
    portageGeneraleTotal +
    kiloDistance +
    30 * (Number(totalBasket) + Number(volumeCalcul));
  console.log("test 0", basic);

  let eco =
    portageGeneraleTotal +
    kiloDistance +
    45 * (Number(totalBasket) + Number(volumeCalcul));
  console.log("test 1", eco);
  let security =
    portageGeneraleTotal +
    kiloDistance +
    60 * (Number(totalBasket) + Number(volumeCalcul));
  console.log("test 2", security);
  let premium =
    portageGeneraleTotal +
    kiloDistance +
    80 * (Number(totalBasket) + Number(volumeCalcul));
  console.log("test 3", premium);

  useEffect(() => {
    if (toggleBlocks === 1) {
      setTotalFormule(basic);
      console.log("toggle basic", basic);
    } else if (toggleBlocks === 2) {
      setTotalFormule(eco);
      console.log("toggle eco", eco);
    } else if (toggleBlocks === 3) {
      setTotalFormule(security);
      console.log("toggle security", security);
    } else if (toggleBlocks === 4) {
      setTotalFormule(premium);
      console.log("toggle premium", premium);
    }
  }, [basic, eco, security, premium, setTotalFormule, toggleBlocks]);

  return (
    <div className="littleformule__contain ">
      <div
        className={
          toggleBlocks === 1
            ? " little__border"
            : "littleformule__contain__block"
        }
        onClick={() => toggleBlock(1)}
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
              Basic
              <br />
            </h3>
          </div>
        </div>
        <div className="littleformule__box">
          <h3 className="pack__price">{basic.toFixed(2)}€</h3>
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
              Eco +
              <br />
            </h3>
          </div>
        </div>
        <div className="littleformule__box">
          <h3 className="pack__price">{eco.toFixed(2)}€</h3>
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
              Securité
              <br />
            </h3>
          </div>
        </div>
        <div className="littleformule__box">
          <h3 className="pack__price">{security.toFixed(2)}€</h3>
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
          <h3 className="pack__price">{premium.toFixed(2)}€</h3>
        </div>
      </div>
    </div>
  );
};

export default LittleFormule;
