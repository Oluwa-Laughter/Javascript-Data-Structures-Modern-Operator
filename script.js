"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00pm",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} street at ${time}`
    );
  },

  orderPasta(ingr1, ingr2, ingr3) {
    console.log(
      `Here is your delicious Pasta with the Ingerients ${ingr1}, ${ingr2} and ${ingr3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngeredient) {
    console.log(mainIngredient);
    console.log(otherIngeredient);
  },
};

//////////////////////////
// Array Destructing
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receives 2 values returned from a function
const [start, end] = restaurant.order(2, 0);
console.log(start, end);

// Nested Array Destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//////////////////////////
// Objects Destructing
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objescts Destructing
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: "22:30pm",
  address: "2, Mexico",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "10, Lagos",
  time: "3pm",
});

//////////////////////////
//The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables : arrays, strings, maps, sets NOT objects
const str = "jonas";
const letters = [...str, " ", "S"];
console.log(letters);
console.log(...str);

// Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingeredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//////////////////////////
// Rest Pattern or Parameter
// 1.) Destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2.) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(2, 3, 4, 6, 1, 2, 4, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushroom", "onion", "olives", "spinach");

///////////////////////
// Short Circuiting
// OR - ||
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;

console.log(guest2);

// AND - &&
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// Nullish Coalscing operator
// ??
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

////////////////
// The FOR-OF loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(` ${i} : ${el}`);
}

///////////////////
// Optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH Optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining on OBJECTS
console.log(restaurant.order?.(0, 1) ?? "Method does Not Exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does Not Exist");

// Optional Chaining on ARRAYS
const users = [{ name: "Jonas", email: "hello@jonas.io" }];

console.log(users[0]?.name ?? "User array Empty");

if (users.length > 0) console.log(users[0].name);
else console.log("User array Empty");

////////////////////
//Looping Objects

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day}`;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key,value]
for (const [key, { open, close }] of entries) {
  // console.log(key, open, close);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/////////////////////////
//SETS
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rissoto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Rissoto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

//////////////////////////
// MAPS

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");

console.log(rest);

console.log(rest.size);
console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming Language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question);

// Convert Object to MAP
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
}

const answer = 3; //Number(prompt("Your Answer:"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert Map to Array
console.log(...question);
console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//////////////////////////
// Working with STRINGS
const airline = "Fly Emirate";
const plane = "A435";

console.log(plane[1]);
console.log(plane.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("e"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const x = seat.slice(-1);
  if (x === "B" || x === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("234C");
checkMiddleSeat("576E");

console.log(new String("Jonas"));

console.log(typeof new String("Jonas").slice(1));

///////
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix Capitlization
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Email error
const email = "hello@jonas.io";
const loginEmail = "    Hello@jonas.io \n";

const emailChecker = function () {
  const normalizedEmail = loginEmail.toLowerCase().trim();
  console.log(normalizedEmail);
  console.log(email === normalizedEmail);
};

emailChecker(email, loginEmail);

//Replacing
const priceGB = "288,97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
console.log(priceUS);

const annoucement = "use the exit door , exit the door";
console.log(annoucement.replaceAll("door", "gate"));

//Boolean
console.log(plane.includes("A4"));

console.log(plane.startsWith("A"));
console.log(plane.endsWith(5));

//Split
console.log("a+very+nice+string".split("+"));
const [firstName, lastName] = "Isaac Makinde".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    console.log(n);
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizedName("jessica ann smith davies");
capitalizedName("jonas schmedtmann");

//Padding
const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log("jonas".padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  // console.log(str);
  const last = str.slice(-4);

  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(22313617684686138));
console.log(maskCreditCard(2231366138));
console.log(maskCreditCard(22316138));

// Repeat

const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩️".repeat(n)}`);
};
planesInLine(5);
planesInLine(6);
planesInLine(12);
