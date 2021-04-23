import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "../Calendar.css";
import Trait from "./Trait";
import { ProductContextbis } from "../context/ProductContext";
import PackEmballageTarif from "./PackEmballageTarif";
import LittleFormule from "./LittleFormule";
import ButtonNav from "./ButtonNav";

function TarifGood({
  quantityRecapTotal,
  setQuantityRecapTotal,
  count,
  setCount,
  date,
  setDate,
  endDate,
  setEndDate,
  setToggleBloks,
  toggleBlocks,
  setTotalQuantity,
  totalQuantity,
  totalTest,
  totalQuantityRecap,
  totalQuantityV2,
  setTotalQuantityV2,
  totalFormule,
  setTotalFormule,
  kiloDistance,
  portageGeneraleTotal,
  totalBasket,
  volumeCalcul,
}) {
  const [showDate, setShowDate] = useState(false);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const onChange = (date) => {
    setDate(date);
  };
  const onChangeTwo = (date) => {
    setEndDate(date);
  };

  const validation = () => {
    setShowDate(true);
  };
  console.log(">>>>date", date.date);

  const { product, setProduct } = useContext(ProductContextbis);
  return (
    <div className="calend__contain">
      <div className="calendar__textanddate">
        <h3>Réservation</h3>
        <div className="date__contain">
          <div className="date ">
            <div className="calendar__title">
              <p>Date de Chargement</p>
              <Calendar
                onChange={onChange}
                selectRange={true}
                value={date}
                className="calendar"
              />
            </div>
            <button className="date__button" onClick={validation}>
              Valider
            </button>
          </div>

          <div className="date ">
            <div className="calendar__title">
              <p>Date de Livraison</p>
              <Calendar
                onChange={onChangeTwo}
                selectRange={true}
                value={endDate}
                className="calendar"
              />
            </div>
            <button className="date__buttonV2" onClick={validation}>
              Valider
            </button>
          </div>
          <div>
            {showDate === true ? (
              <div className="calendar__text">
                <p> Vous avez réservé la date </p>
                <div className="calendar__blockdate">
                  <span className="date__span">Chargement </span>
                  <br />
                  <span className="date__spantext">
                    du :{date[0].toLocaleDateString("fr-FR", options)}
                  </span>
                  <br />
                  <span className="date__spantext">
                    au:
                    {date[1].toLocaleDateString("fr-FR", options)}
                  </span>
                </div>
                <div className="calendar__blockdate">
                  <span className="date__span">Livraison </span>
                  <br />
                  <span className="date__spantext">
                    du :{endDate[0].toLocaleDateString("fr-FR", options)}
                  </span>
                  <br />
                  <span className="date__spantext">
                    au:
                    {endDate[1].toLocaleDateString("fr-FR", options)}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Trait />
      </div>
      {showDate ? (
        <div>
          <LittleFormule
            setToggleBloks={setToggleBloks}
            toggleBlocks={toggleBlocks}
            totalFormule={totalFormule}
            setTotalFormule={setTotalFormule}
            kiloDistance={kiloDistance}
            portageGeneraleTotal={portageGeneraleTotal}
            totalBasket={totalBasket}
            volumeCalcul={volumeCalcul}
          />
          <Trait />
          <PackEmballageTarif
            setQuantityRecapTotal={setQuantityRecapTotal}
            product={product}
            setTotalQuantity={setTotalQuantity}
            totalQuantity={totalQuantity}
            totalTest={totalTest}
            totalQuantityRecap={totalQuantityRecap}
            totalQuantityV2={totalQuantityV2}
            setTotalQuantityV2={setTotalQuantityV2}
          />
          <Trait />
          <ButtonNav count={count} setCount={setCount} />
        </div>
      ) : null}
    </div>
  );
}

export default TarifGood;
