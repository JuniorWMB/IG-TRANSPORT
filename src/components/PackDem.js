import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faPiggyBank,
  faUserShield,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PackDem = () => {
  const [viewBasic, setViewBasic] = useState(false);
  const [viewEco, setViewEco] = useState(false);
  const [viewSecurite, setViewSecurite] = useState(false);
  const [viewPremium, setViewPremium] = useState(false);

  return (
    <>
      <div className="hidenoresponsive ">
        <div
          className="titleAndLogo titleAndLogos"
          onClick={() => !setViewBasic}
        >
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faPiggyBank}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue">
            <h3 className="pack__title">
              basic
              <br />
            </h3>
            <h3 className="pack__price">30€/m3</h3>
          </div>
        </div>
      </div>

      <div className="hidenoresponsive">
        {" "}
        <div className="titleAndLogo titleAndLogos ">
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faGem}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue">
            <h3 className="pack__title">
              eco +
              <br />
            </h3>
            <h3 className="pack__price">45€/m3</h3>
          </div>
        </div>
      </div>
      <div className="hidenoresponsive">
        {" "}
        <div className="titleAndLogo titleAndLogos">
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faUserShield}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue">
            <h3 className="pack__title">
              securité
              <br />
            </h3>
            <h3 className="pack__price">60€/m3</h3>
          </div>
        </div>
      </div>

      <div className="hidenoresponsive">
        {" "}
        <div className="titleAndLogo titleAndLogos">
          <div className="pack__logogreen">
            <FontAwesomeIcon
              icon={faGem}
              style={{ color: "#94c935", fontSize: "50px" }}
            />
          </div>
          <div className="pack__titleblue">
            <h3 className="pack__title">
              Premium
              <br />
            </h3>
            <h3 className="pack__price">80€/m3</h3>
          </div>
        </div>
      </div>

      {/* hide */}
      <div className="pack__contain2 packDemHide">
        <div
          className="pack pack__height"
          onMouseEnter={() => setViewBasic(true)}
          onMouseLeave={() => setViewBasic(false)}
        >
          {viewBasic ? (
            <div className="view__info">
              <div className="text__pack">
                <h1>Cette formule comprend :</h1>
                <p>
                  <br /> ● La manutention de vos meubles depuis votre
                  appartement jusque dans le camion <br /> ● Remise en place de
                  votre mobilier dans votre nouveau logement
                </p>
              </div>
              <div>
                <Link to="/devis" className="pack__button">
                  <button className="pack__buttongreen">Réservation</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <div className="titleAndLogo titleAndLogos">
                <div className="pack__logogreen">
                  <FontAwesomeIcon
                    icon={faPiggyBank}
                    style={{ color: "#94c935", fontSize: "50px" }}
                  />
                </div>
                <div className="pack__titleblue">
                  <h3 className="pack__title">
                    basic
                    <br />
                  </h3>
                </div>
              </div>
              <h3 className="pack__price">30€/m3</h3>
            </div>
          )}
        </div>

        <div
          className="pack pack__height"
          onMouseEnter={() => setViewEco(true)}
          onMouseLeave={() => setViewEco(false)}
        >
          {viewEco ? (
            <div className="view__info">
              <div className="text__pack">
                <h1> Avec cette formule les déménageurs s'occupe de tout :</h1>
                <p>
                  ● L' emballages et le déballages de tout vos cartons.
                  <br />
                  ● Le démontages et remontage de tout vos meubles.
                  <br />● Tout vos branchement d'appareillages électriques et
                  électro-ménager.
                </p>
              </div>
              <div>
                <Link className="pack__button">
                  <button className="pack__buttongreen">Réservation</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <div className="titleAndLogo titleAndLogos">
                <div className="pack__logogreen">
                  <FontAwesomeIcon
                    icon={faGem}
                    style={{ color: "#94c935", fontSize: "50px" }}
                  />
                </div>
                <div className="pack__titleblue">
                  <h3 className="pack__title">
                    eco +
                    <br />
                  </h3>
                </div>
              </div>
              <h3 className="pack__price">45€/m3</h3>
            </div>
          )}
        </div>

        <div
          className="pack pack__height"
          onMouseEnter={() => setViewSecurite(true)}
          onMouseLeave={() => setViewSecurite(false)}
        >
          {viewSecurite ? (
            <div className="view__info">
              <div className="text__pack">
                <h1> Avec cette formule les déménageurs s'occupe de tout :</h1>
                <p>
                  ● L' emballages et le déballages de tout vos cartons.
                  <br />
                  ● Le démontages et remontage de tout vos meubles.
                  <br />● Tout vos branchement d'appareillages électriques et
                  électro-ménager.
                </p>
              </div>
              <div>
                <Link className="pack__button">
                  <button className="pack__buttongreen">Réservation</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <div className="titleAndLogo titleAndLogos">
                <div className="pack__logogreen">
                  <FontAwesomeIcon
                    icon={faUserShield}
                    style={{ color: "#94c935", fontSize: "50px" }}
                  />
                </div>
                <div className="pack__titleblue">
                  <h3 className="pack__title">
                    securité
                    <br />
                  </h3>
                </div>
              </div>
              <h3 className="pack__price">60€/m3</h3>
            </div>
          )}
        </div>

        <div
          className="pack pack__height"
          onMouseEnter={() => setViewPremium(true)}
          onMouseLeave={() => setViewPremium(false)}
        >
          {viewPremium ? (
            <div className="view__info">
              <div className="text__pack">
                <h1> Avec cette formule les déménageurs s'occupe de tout :</h1>
                <p>
                  ● L' emballages et le déballages de tout vos cartons.
                  <br />
                  ● Le démontages et remontage de tout vos meubles.
                  <br />● Tout vos branchement d'appareillages électriques et
                  électro-ménager.
                </p>
              </div>
              <div>
                <Link className="pack__button">
                  <button className="pack__buttongreen">Réservation</button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <div className="titleAndLogo titleAndLogos">
                <div className="pack__logogreen">
                  <FontAwesomeIcon
                    icon={faGem}
                    style={{ color: "#94c935", fontSize: "50px" }}
                  />
                </div>
                <div className="pack__titleblue">
                  <h3 className="pack__title">
                    Premium
                    <br />
                  </h3>
                </div>
              </div>
              <h3 className="pack__price">80€/m3</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
