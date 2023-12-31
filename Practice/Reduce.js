// const arr = [1, 2, 3];

// const mySum = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(mySum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 587,
  },
  {
    itemName: "Python course",
    price: 997,
  },
  {
    itemName: "Php course",
    price: 5000,
  },
];

const totalCartsPrice = shoppingCart.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0);
console.log("Total carts Price : ", totalCartsPrice);

// __________________________________________________

