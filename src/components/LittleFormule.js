import React, { useState } from "react";
import {
  faPiggyBank,
  faUserShield,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LittleFormule = () => {
  const [toggleBlocks, setToggleBloks] = useState(3);

  const toggleBlock = (index) => {
    setToggleBloks(index);
  };

  return (
    <div className="littleformule__contain ">
      {/* <button
        class="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/paintings/starry-night"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="/assets/images/starry-night.jpg"
        data-item-name="The Starry Night"
      >
        Add to cart
      </button> */}

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
