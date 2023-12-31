"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, mainIndex, address, starterIndex }) {
    console.log(
      `ORDER  RECEIVED! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd at ${address} at ${time}`
    );
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1} , ${ing2} and ${ing3}`);
  }
};

const arr = [7, 8, 9];

const newBadArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(newBadArr);

const newArr = [1, 2, ...arr];

console.log(newArr);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1"),
  prompt("Ingredents 2"),
  prompt("Ingredients 3"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);