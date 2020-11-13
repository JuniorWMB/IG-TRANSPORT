import React from "react";
import "../App.css";

function ByProducts({ dataPrice }) {
  return (
    <div className="product">
      {dataPrice.map((product, index) => (
        <div key={index} className="product__container">
          <div className="product__allblock">
            <div className="product__img">
              <img src={product.image} alt={product.description} />
            </div>
            <div className="product__text">
              <div className="product__description">
                <p>{product.description}</p>
              </div>
              <div className="product__price">
                <button>{product.price} €</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ByProducts;
