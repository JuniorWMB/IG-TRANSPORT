import React, { useState } from "react";
import Calendar from "react-calendar";
import "../Calendar.css";

import Form from "./Form";

import Trait from "./Trait";

function TarifGood() {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const onChange = (date) => {
    setDate(date);
  };

  const validation = () => {
    setShowDate(true);
  };

  // const reset = () => {
  //   setShowDate(false);
  // };

  return (
    <div className="calend__contain">
      <div className="calendar__textanddate">
        <h3>Réservation</h3>
        <div className="date__contain">
          <div className="date ">
            <div>
              <Calendar
                onChange={onChange}
                selectRange={true}
                value={date}
                className="calendar"
              />
              <button className="date__button" onClick={validation}>
                Valider
              </button>
            </div>
          </div>
          <div>
            <h>Veuillez selectioner un date de réservation</h>

            {showDate === true ? (
              <div className="calendar__text">
                <p> Vous avez réservé la date </p>
                <div className="calendar__blockdate">
                  <span className="date__span">du :</span>
                  <span className="date__spantext">
                    {date[0].toLocaleDateString()}
                  </span>
                </div>
                <div className="calendar__blockdatemargin">
                  <span className="date__span">au : </span>
                  <span className="date__spantext">
                    {date[1].toLocaleDateString()}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Trait />
      </div>
      <Form />

      {/* <Button /> */}
    </div>
  );
}

export default TarifGood;
