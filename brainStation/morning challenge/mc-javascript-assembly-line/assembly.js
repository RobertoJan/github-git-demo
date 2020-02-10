// these are some resources you need to make a taco. The ingredients are all in a fridge array.
let fridge = ['tomato', 'lettuce', 'salsa', 'sour cream', 'cheddar', 'mozzarella', 'chicken', 'steak', 'haddock', 'cilantro', 'lime', 'pickled turnip', 'cabbage'];
// and the recipes are in another array
let recipes = {
  "Classic taco": {
    "ingredients": ['taco', 'tomato', 'lettuce', 'salsa', 'sour cream', 'cheddar', 'chicken']
  },
  "Highland taco": {
    "ingredients": ['taco', 'salsa', 'sour cream', 'cheddar', 'steak']
  },
  "Sea taco": {
    "ingredients": ['taco', 'salsa', 'mozzarella', 'cilantro', 'lime', 'picked turnip', 'cabbage', 'haddock']
  }
};

// We'll have a bunch of customers coming in shortly, but first we have to prepare for the day.
// There is a vital ingredient currently missing from our fridge: the taco itself.
// let's go to the store and see if they have any in-stock.
let storeInventory = {
  "tomato": 5,
  "lettuce": 10,
  "taco": 3,
  "cheddar": 0,
  "salsa": 2,
  "sour cream": 0
};


// 1. write a conditional statement and check if any tacos are available in the store. 

if (taco > 0) {
  console.log("Buying taco");
  fridge.push(taco);
}
// if there are at-least 1 of that item, print 'Buying taco...'

// 2. then add the string 'taco' to the fridge array

// ok, a bunch of customers have just walked in. Each one has a list of tacos they ordered...
let customers = [
  {
    "name":"Andre",
    "order": ["Classic Taco", "Classic Taco"]
  },
  {
    "name": "Josh",
    "order": ["Highland Taco", "Classic Taco"]
  },
  {
    "name": "Yash",
    "order": ["Classic Taco", "Sea Taco"]
  }
];

// Let's start making them and serving our guests!
// 3. create an empty array called 'orders'

// 4. We're going to serve one customer at a time. What is the name of the first customer?
// Print out, "Now serving {customer name here}"

// 5. How many tacos did they order? Print out, "they ordered {number of tacos} tacos"

// 6. Add all the names of the tacos in their order to the 'orders' array from step 3.

// 7. Add your own order to the customers array, with your name and your taco orders.

// 8. Serve the tacos! pop() one taco at a time out of the orders array, and print out "serving {name of taco}"

// 9. The chef is asking you what the last taco you made was. Print out the last item of the last customer's order. "The last customer ordered {name of taco}"

// BONUS QUESTIONS:
// 10. At the end of the day, the chef asks you the total # of tacos you made today. Print out, "Chef, I made {number of tacos} tacos today"

// 11. Write a loop to do tasks 4-8 for every customer, instead of writing it out over and over.