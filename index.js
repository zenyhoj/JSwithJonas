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

// Destructured restaurant object
const {
  name,
  openingHours: {
    mon: { open, close },
  },
} = restaurant;

const [main, secondary, third] = restaurant.starterMenu;
console.log(restaurant.orderMenu(main, secondary));

// Object that can be passed on to the orderDelivery method
restaurant.orderDelivery({
  name: name,
  time: "9:00 PM",
  orderName: main,
  address: "Rizal",
});

// Object destructuring
