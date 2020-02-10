// TODO: for each of the variables declared here, go to the scope section, in the debugger panel, in the sources tab
// and try to find them!
var label = "Grocery List";
var storeOpen = true;
var nanometer = 1e-9;
var appleInventory = 50;
var orangeInventory = 100;
var totalInventory = appleInventory + orangeInventory;
appleInventory = 10;
var truthyValue = true && "true" && true;
var falsyValue = true && 0 && true;
var booleanValue = !!label || !0;
var inventory = ["apples", "oranges"];
var inventoryDetail = {
  "apples": {
    "type": "Royal Gala",
    "total": 50
  },
  "oranges": {
    "type": "Mediterranean Oranges",
    "total": 100
  }
};

function addTwoNumbers(x, y) {
  return x + y;
}

// NOTE: if you've covered data structures already, you can immediately check the values you've stored
// in the console, through the 'window' object as it says in the Scope panel.

