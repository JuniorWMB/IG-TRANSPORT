import React from "react";

const Basket = ({
  products,
  total,
  showSide,
  setProducts,
  setTotalBasket,
  totalBasket,
}) => {
  setTotalBasket(total.toFixed(2));

  return (
    <div className={showSide ? "panier__contain" : "panier__none"}>
      <div className="panier__meuble">
        <h1>Panier</h1>
        {products.map((product, idx) => {
          return (
            <div className="panier__liste">
              <button
                onClick={() => {
                  //modifier l'etat product

                  //copie le state
                  const newProduct = [...products];

                  // rechercher dans le panier l'element à modifier

                  // retirer le produit
                  if (newProduct[idx].quantity === 1) {
                    newProduct.splice(idx, 1);
                  } else {
                    newProduct[idx].quantity--;
                  }
                  //mettre à jour le state
                  setProducts(newProduct);
                }}
              >
                -
              </button>
              {product.quantity}
              <button
                onClick={() => {
                  const newProduct = [...products];
                  newProduct[idx].quantity++;
                  setProducts(newProduct);
                }}
              >
                +
              </button>

              {product.name}
            </div>
          );
        })}
        <div></div>
        <p className="panier__volume">Volumes: {total.toFixed(2)} m3</p>
      </div>
    </div>
  );
};

export default Basket;
