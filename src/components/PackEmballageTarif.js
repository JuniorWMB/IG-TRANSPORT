import React from "react";

const PackEmballageTarif = ({ product }) => {
  console.log("test>>", product);
  return (
    <div className="little">
      <h3>Choissisez votre emballage</h3>

      <div className="little__master" style={{ display: "flex" }}>
        {product.map((prod, index) => {
          return (
            <div key={prod.id} className="little__productcontain ">
              <div classname="little__productpicturecontain snipcart-add-item">
                <img
                  className="little__productpicture"
                  src={prod.image}
                  alt={prod.description}
                />

                {/* <p className="little__productparagraphe">{prod.description}</p> */}
              </div>
              <div className="little__productpricetext">
                <div className="little__price"> {prod.price}€</div>
                <div className="little__button">
                  <button>-</button>
                  <p>0</p>
                  <button>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackEmballageTarif;
