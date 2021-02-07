import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "../Calendar.css";

import Form from "./Form";

import Trait from "./Trait";
import { ProductContextbis } from "../context/ProductContext";
import PackEmballageTarif from "./PackEmballageTarif";
import Payment from "./Payment";
import LittleFormule from "./LittleFormule";

function TarifGood() {
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const onChange = (date) => {
    setDate(date);
  };
  const onChangeTwo = (date) => {
    setEndDate(date);
  };

  const validation = () => {
    setShowDate(true);
  };

  const { product, setProduct } = useContext(ProductContextbis);
  console.log("product", product);
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
                // selectRange={true}
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
                // selectRange={true}
                value={endDate}
                className="calendar"
              />
            </div>
          </div>
          <div>
            {/* <h4 className="resa">
              Veuillez selectioner une date de réservation
            </h4> */}

            {showDate === true ? (
              <div className="calendar__text">
                <p> Vous avez réservé la date </p>
                <div className="calendar__blockdate">
                  <span className="date__span">du :</span>
                  <span className="date__spantext">
                    {date.toLocaleDateString()}
                  </span>
                </div>
                <div className="calendar__blockdatemargin">
                  <span className="date__span">au : </span>
                  <span className="date__spantext">
                    {endDate.toLocaleDateString()}
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
          {/* <Form />
          <Trait /> */}
          <LittleFormule />
          <Trait />
          <PackEmballageTarif product={product} />
          <Trait />
          <Payment />
        </div>
      ) : null}

      {/* <Button /> */}
    </div>
  );
}

export default TarifGood;
