import React, { useState } from "react";
import "../App.css";

function ByProducts({ results }) {
  const [produit, setProduit] = useState([]);

  let total = 0;

  for (let i = 0; i < produit.length; i++) {
    total = total + Number(produit[i].price) * produit[i].quantity;
  }

  return (
    <div className="product">
      {results.map((product) => (
        <div key={product.id} className="product__container">
          <div className="product__allblock">
            <div className="product__img">
              <img src={product.image} alt={product.description} />
            </div>
            <div className="product__text">
              <div className="product__description">
                <p>{product.description}</p>
              </div>
              <div
                onClick={() => {
                  let isFound = false;

                  const newProduit = [...produit];
                  for (let i = 0; i < produit.length; i++) {
                    if (produit[i].id === product.id) {
                      newProduit[i].quantity++;
                      isFound = true;
                      break;
                    }
                  }
                  if (isFound === false) {
                    newProduit.push({
                      title: product.description,
                      price: product.price,
                      quantity: product.quantity,
                      id: product.id,
                    });
                  }

                  setProduit(newProduit);
                }}
                className="product__price"
              >
                <button
                  class="snipcart-add-item"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-description={product.description}
                  data-item-image={product.image}
                  data-item-name={product.description}
                  data-item-shippable="true"
                  data-item-url="/all-products"
                  data-currency="eur"
                >
                  {product.price} €
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="panier">
        <div className="panier__container">
          {produit.map((prod, index) => (
            <div className="panier__produit">
              <button
                onClick={() => {
                  const newProduit = [...produit];
                  if (newProduit[index].quantity === 1) {
                    newProduit.splice(index, 1);
                  } else {
                    newProduit[index].quantity--;
                  }
                  setProduit(newProduit);
                }}
              >
                -
              </button>
              {prod.quantity}
              <button
                onClick={() => {
                  const newProduit = [...produit];

                  newProduit[index].quantity++;

                  setProduit(newProduit);
                }}
              >
                +
              </button>
              {prod.title}
            </div>
          ))}
        </div>
        <div className="total">
          <p>Total: {total} €</p>
        </div>
      </div> */}
    </div>
  );
}

export default ByProducts;
