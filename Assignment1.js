"use strict";
class restaurantManager {
  constructor(inputList) {
    this.restaurantList = inputList;
  }

  printAllRestaurantNames = () => {
    return this.restaurantList.map((item) => item.name);
  };

  filterRestaurantByCity = (cityname) => {
    return this.restaurantList.filter((item) => item.city == cityname);
  };
}
var rm = new restaurantManager([
  {
    name: "Vasantha Bhavan",
    city: "Chennai",
  },

  {
    name: "Temple City",
    city: "Madurai",
  },
  {
    name: "Adayar Anandha Bhavan",
    city: "Madurai",
  },
  {
    name: "Sangeetha",
    city: "Chennai",
  },
]);

console.log(rm.printAllRestaurantNames());
console.log(rm.filterRestaurantByCity("Madurai"));

let orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above-2000": 76,
};

const total = Object.values(orderData).reduce((prev, next) => prev + next);
console.log(total);

// Number of order proportion options.

const headers = Object.keys(orderData);
console.log(headers.length);

// Percentage of each proportion.

let arr = [];
const response = headers.map((item, index) => {
  const obj = {
    id: index + 1,
    order: item,
    orderpercentage: ((orderData[item] / total) * 100).toFixed(2),
    restaurant: "Punjabi Tadka",
  };
  arr.push(obj);
});
console.log(arr);
