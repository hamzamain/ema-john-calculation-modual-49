const addToCart = (id) => {
  //get stored data from local storage

  /* let shoppingCart = {};
  const storedData = localStorage.getItem("shoping-cart");
  if (storedData) {
    shoppingCart = JSON.parse(storedData);
  } */

  let shoppingCart = storedCart();

  //update quantity and set to local data
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(shoppingCart));
};

const storedCart = () => {
  let shoppingCart = {};
  const storedData = localStorage.getItem("shoping-cart");
  if (storedData) {
    shoppingCart = JSON.parse(storedData);
  }
  return shoppingCart;
};

export { addToCart, storedCart };
