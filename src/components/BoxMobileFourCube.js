import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const BoxMobileFourCube = ({
  titleQuatre,
  titleHuit,
  titlePromo,
  livraison,
  portage,
  etage,
  total,
  valider,
}) => {
  const [show, setShow] = useState(false);
  const [port, setPort] = useState("");

  let totalBoxMobile = Number(port) + 50;

  const onClickModal = () => {
    MySwal.fire({
      title: <h2>Test ok</h2>,
      footer: "Copyright 2021",
      iconColor: "true",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, I am sure!",
      cancelButtonText: "No, cancel it!",
      html: (
        <div>
          <h3>Le paiement seras effectuer des le 1er mois de location</h3>
          <br />
          <p>Merci de vous munir de lors de notre intervention :</p>
          <ul>
            <li>Pièce d'identité</li>
            <li>RIB</li>
            <li>Justificatif de domicile</li>
          </ul>
          <p>
            Afin de mettre en place le prélevement automatique mensuel selon de
            stockage.
          </p>
        </div>
      ),
    }).then(function (isConfirm) {
      if (isConfirm) {
        MySwal.getProgressSteps(
          "Shortlisted!",
          "Candidates are successfully shortlisted!",
          "success"
        );
      } else {
        MySwal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  const handlePortChange = (e) => {
    setPort(e.target.value);
  };

  return (
    <div className="boxmobiletext__block">
      <h4>
        {titleQuatre} {titleHuit} {titlePromo}
      </h4>
      <div className="boxmobiletext__text">
        <div className="boxmobiletext__livraison">
          <p> {livraison} </p>
        </div>

        <div className="boxmobiletext__manutention">
          <p>Voulez-vous de la manutention ?</p>
          <div className="boxmobiletext__button">
            <button
              onClick={() => {
                setShow(true);
              }}
              className={show ? "btn__gray" : "btn__green"}
            >
              OUI
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
              className={show ? "btn__green" : "btn__gray"}
            >
              NON
            </button>
          </div>
        </div>

        <div className={show ? "boxmobile__show" : "boxmobile__hidden"}>
          <div className="boxmobile__portage">
            <p>{portage}</p>
            <select name="" id="" value={port} onChange={handlePortChange}>
              <option value="20">10m à 20m</option>
              <option value="40">20m à 40m</option>
              <option value="60">40m à 60m</option>
              <option value="80">+ de 80m</option>
            </select>
          </div>
          <div className="boxmobile__etage">
            <p>{etage}</p>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>

        <div className="boxmobile__total">
          <p>{total} </p>
          <span> {totalBoxMobile} €</span>
        </div>
        <div className="boxmobile__valider">
          <button onClick={onClickModal}>{valider} </button>
        </div>
      </div>
    </div>
  );
};

export default BoxMobileFourCube;
