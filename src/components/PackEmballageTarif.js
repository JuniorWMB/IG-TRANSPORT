import React, { useState } from "react";
import ButtonNav from "./ButtonNav";

const PackEmballageTarif = ({
  product,
  totalQuantity,
  setTotalQuantity,
  totalTest,
}) => {
  const [products, setProducts] = useState([]);
  const [disableProduct, setDisableProduct] = useState(false);

  let total = 0;
  // let totalQuantity = 0;

  // for (let i = 0; i < products.length; i++) {
  //   total = total + Number(products[i].price) * products[i].quantity;
  //   console.log("total", total);
  // }

  for (let i = 0; i < products.length; i++) {
    totalTest = totalTest + Number(products[i].quantity);
  }

  console.log("quantity1", totalTest);

  return (
    <div className="little">
      <h3>Choissisez votre emballage</h3>

      <div className="little__master" style={{ display: "flex" }}>
        {product.map((prod) => {
          console.log("name products", prod.description);

          return (
            <div
              key={prod.id}
              className="little__productcontain "
              onClick={() => {
                setDisableProduct(true);
                //créer une copie
                const newProduct = [...products];
                let isFound = false;
                for (let i = 0; i < products.length; i++) {
                  if (products[i].id === prod.id) {
                    newProduct[i].quantity++;
                    isFound = true;
                    break;
                  }
                }
                if (isFound === false) {
                  //modifier la copie
                  newProduct.push({
                    name: prod.description,
                    volume: prod.volume,
                    quantity: "1",
                    id: prod.id,
                  });
                }

                //mettre à jour le state

                setProducts(newProduct);
              }}
            >
              <div classname="little__productpicturecontain snipcart-add-item">
                <img
                  className="little__productpicture"
                  src={prod.image}
                  alt={prod.description}
                />
              </div>
              <div className="little__productpricetext">
                <div className="little__price"> {prod.price}€</div>
              </div>
            </div>
          );
        })}
      </div>
      {disableProduct ? (
        <div
          style={{
            border: "1px solid red",
            width: "60%",
            height: "30vh",
            overflow: "scroll",
          }}
        >
          {products.map((product, idx) => {
            console.log("products", products);
            return (
              <div
                // className="panier__liste"
                style={{ display: "flex", padding: ".5rem" }}
              >
                <button
                  style={{ marginLeft: "1rem" }}
                  onClick={() => {
                    const newProduct = [...products];

                    if (newProduct[idx].quantity === 0) {
                      newProduct.splice(idx, 1);
                    } else {
                      newProduct[idx].quantity--;
                    }
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
                <p style={{ marginLeft: "1rem" }}>{products[0].name}</p>
              </div>
            );
          })}
        </div>
      ) : null}
      <p>{Number(totalTest)} PRODUITS</p>
      <p>{total} TOTAL</p>
    </div>
  );
};

export default PackEmballageTarif;
