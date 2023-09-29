const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// ATTEMP AT ARROW FUNCTIONS

// Create function to return and log the string("Your grand total is ${finalAmount}")
const total = (patient) => {
  // Create function to determine if customer has subscription and to apply 25% discount if true
  const hasScript = (patient) =>
    patient["subscription"] === true ? true : false;
  // Create function to determine if customer has a coupon, and apply $10 off after subscription discount
  const hasCoupon = (patient) => (patient["coupon"] === true ? true : false);
  // create a function to apply discounts and return total
  const grandTotal = (patient) => {
    let price = patient["pricePerRefill"] * patient["refills"];
    if (hasScript(patient) === true) price = price - price * 0.25;
    if (hasCoupon(patient) === true) price = price - 10;
    return price.toFixed(2);
  };
  // Return the string with the grand total after checking for and applying all discounts
  return `Your grand total is $${grandTotal(patient)}`;
};

console.log(total(timmy));
console.log(total(sarah));
console.log(total(rocky));

// Good Old Regular Named Functions
// // Create function to determine if customer has subscription and to apply 25% discount if true
// function hasScript(patient) {
//   return patient["subscription"] === true ? true : false;
// }

// // Create function to determine if customer has a coupon, and apply $10 off after subscription discount
// function hasCoupon(patient) {
//   return patient["coupon"] === true ? true : false;
// }

// // create a function to determine total
// function total(patient) {
//   let price = patient["pricePerRefill"] * patient["refills"];
//   if (hasScript(patient) === true) price = (price - price * 0.25).toFixed(2);
//   if (hasCoupon(patient) === true) price = (price - 10).toFixed(2);
//   return price;
// }
// // Create function to return and log the string("Your grand total is ${finalAmount}")

// function calcPrice(patient) {
//   return `Your grand total is $${total(patient)}`;
// }

// console.log(calcPrice(timmy));
// console.log(calcPrice(sarah));
// console.log(calcPrice(rocky));
