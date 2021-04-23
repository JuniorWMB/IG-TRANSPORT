import React, { useState } from "react";

const PackEmballageTarif = ({
  product,
  totalQuantityV2,
  setTotalQuantityV2,
  totalTest,
  setQuantityRecapTotal,
  totalQuantityRecap,
}) => {
  const [products, setProducts] = useState([]);
  const [disableProduct, setDisableProduct] = useState(false);

  for (let i = 0; i < products.length; i++) {
    totalTest = totalTest + Number(products[i].quantity);
    totalQuantityRecap =
      totalQuantityRecap + Number(products[i].price) * products[i].quantity;

    setTotalQuantityV2(totalTest);
    setQuantityRecapTotal(totalQuantityRecap);
    console.log("price Rererecap", Number(totalQuantityRecap));
  }
  console.log("terre", products);

  return (
    <div className="little">
      <h3>Choissisez votre emballage</h3>

      <div className="little__master" style={{ display: "flex" }}>
        {product.map((prod) => {
          return (
            <div
              key={prod.id}
              className="little__productcontain "
              onClick={() => {
                setDisableProduct(true);
                let isFound = false;
                const newProduct = [...products];
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
                    price: prod.price,
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
        <>
          <div
            style={{
              border: "1px outset #2c436d",
              width: "60%",
              height: "30vh",
              overflow: "scroll",
              flexDirection: "column",
              display: "flex",
            }}
          >
            {products.map((product, idx) => {
              return (
                <div
                  className="block__liste"
                  style={{
                    padding: ".5rem",
                  }}
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
                  <p style={{ marginLeft: "1rem" }}>{product.name}</p>
                </div>
              );
            })}
          </div>

          <p className="totalPack">{Number(totalQuantityRecap.toFixed(2))}€</p>
        </>
      ) : null}
    </div>
  );
};

export default PackEmballageTarif;
