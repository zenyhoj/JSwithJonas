const numbers = [1, 4, 7];

const sum = numbers.reduce((prev, curr) => prev + curr) / numbers.length;

console.log(sum);

const itemPrice = [
  { item1: "item1", price: 500 },
  { item1: "item2", price: 200 },
  { item3: "item1", price: 900 },
];

const sumOfPrices = itemPrice.reduce(
  (sum, currentValue) => sum + currentValue.price,
  0
);
console.log(sumOfPrices);

const avgOfPrices =
  itemPrice.reduce((sum, currentValue) => sum + currentValue.price, 0) /
  itemPrice.length;
console.log(avgOfPrices);

// ----------------------------------------------------------------------

// Array Destructuring

const restaurant = {
  name: "Best Pizza House",
  starterMenu: ["Pizza", "Burreto", "Italian Veggie"],
  openingHours: {
    mon: { open: "8:00", close: "23:00" },
  },
  orderMenu: function (starterIndex, SecondaryIndex) {
    return ` ${starterIndex} ${SecondaryIndex}`;
  },

  // a method can receive an object that can be destructured
  orderDelivery: function ({
    orderName,
    name = "Burreto",
    time = "8:00 PM",
    address,
  }) {
    console.log(`Your ${orderName} will be delivered at ${address} at ${time}`);
  },
};

// array destructuring
const [main, secondary, third] = restaurant.starterMenu;
console.log(restaurant.orderMenu(main, secondary));

// Destructured restaurant object
const {
  name,
  openingHours: {
    mon: { open, close },
  },
} = restaurant;

// {Object} as arguments that can be passed on to the orderDelivery method
restaurant.orderDelivery({
  name: name,
  time: "9:00 PM",
  orderName: main,
  address: "Rizal",
});

// Spread Operator: can be used in all iterables
// can be used when building an array or pass values into a function

const mainMenu = [...restaurant.starterMenu];
const menu = [...mainMenu, ...restaurant.starterMenu];
console.log(menu);

const string = "Joe Balingit";
const strCount = [...string].length;
console.log(strCount);

// Modifying an Object property by shallow copying the original object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Joe Restaurant";
restaurantCopy.openingHours = { mon: { open: "9:00", close: "12:00" } };

console.log(restaurantCopy.openingHours);
console.log(restaurant.openingHours);
