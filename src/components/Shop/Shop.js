import React, { useEffect, useState } from "react";
import { addToCart, storedCart } from "../../utilities/fakeDataBase";
// import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    const stored = storedCart();
    const savedCart = [];
    for (const id in stored) {
      const addedProduct = product.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = stored[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [product]);

  /* const summaryCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }; */

  const handlerAddToCart = (selectedProduct) => {
    // summaryCart(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // addToDb(product.id);
    addToCart(selectedProduct.id);
    // const newCart = [...cart, product];
    setCart(newCart);
  };

  // console.log(product);
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product) => (
          <Product
            key={product.id}
            product={product}
            handler={handlerAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
