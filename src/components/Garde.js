import React, { useEffect, useState } from "react";
import { GrCheckbox } from "react-icons/gr";
import gsap from "gsap";

function Garde() {
  const [view, setView] = useState(false);
  const [viewM, setViewM] = useState(false);
  const [viewL, setViewL] = useState(false);
  const [devis, setDevis] = useState(false);

  let tl = gsap.timeline();

  useEffect(() => {
    timerDevis();
    if (devis === true) {
      tl.to(".devis__hidden", { duration: 1, x: 280 });
    }
  }, [devis]);

  const timerDevis = () => {
    let interval = setTimeout(() => {
      setDevis(true);
    }, 5000);
    return () => clearInterval(interval);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="devis">
        {devis ? (
          <div className="devis__hidden"> SIMULER MON DEVIS </div>
        ) : null}
      </div>
      <div className="meuble__contain">
        <div
          className="meuble__box"
          onMouseEnter={() => setView(true)}
          onMouseLeave={() => setView(false)}
        >
          {view ? (
            <div className="meuble__size meuble__hovercontain">
              <div className="meuble__hoversize">
                <p>32€</p>
              </div>
              <div className="meuble__hovertext">
                <p>
                  {" "}
                  Petite caisse 4m<sup>3</sup>
                </p>
              </div>
            </div>
          ) : (
            <div className="meuble__size">
              <p>S</p>
            </div>
          )}

          <div className="meuble__containbox">
            <GrCheckbox size={50} color="#2c436d" />
          </div>
        </div>
        <div
          className="meuble__box"
          onMouseEnter={() => setViewM(true)}
          onMouseLeave={() => setViewM(false)}
        >
          {viewM ? (
            <div className="meuble__size meuble__hovercontain">
              <div className="meuble__hoversize">
                <p>60€</p>
              </div>
              <div className="meuble__hovertext">
                <p>
                  Moyenne caisse 8m<sup>3</sup>
                </p>
              </div>
            </div>
          ) : (
            <div className="meuble__size">
              <p>M</p>
            </div>
          )}

          <div className="meuble__containbox">
            <GrCheckbox size={100} color="#2c436d" />
          </div>
        </div>
        <div
          className="meuble__box"
          onMouseEnter={() => setViewL(true)}
          onMouseLeave={() => setViewL(false)}
        >
          {viewL ? (
            <div className="meuble__size meuble__hovercontain">
              <div className="meuble__hoversize">
                <p>90€</p>
              </div>
              <div className="meuble__hovertext">
                <p>
                  Grande caisse 12m<sup>3</sup>
                </p>
              </div>
            </div>
          ) : (
            <div className="meuble__size">
              <p>L</p>
            </div>
          )}

          <div className="meuble__containbox">
            <GrCheckbox size={190} color="#2c436d" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garde;
