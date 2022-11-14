import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shiping = 0;
  let quantity = 0;
  for (const product of cart) {
    shiping = shiping + product.shipping;
    quantity = quantity + product.quantity;
    const singlePrice = product.price * product.quantity;
    total = total + singlePrice;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = parseFloat((total + shiping + tax).toFixed(2));

  return (
    <div className="cart">
      <h2>this is cart container</h2>
      <p>selected item: {quantity}</p>
      <p>Total price: {total}</p>
      <p>Total Shiping: {shiping}</p>
      <p>Total Tax: {tax}</p>
      <h5>Grand Total: {grandTotal}</h5>
    </div>
  );
};

export default Cart;
