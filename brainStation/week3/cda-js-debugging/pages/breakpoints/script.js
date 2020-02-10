// set the breakpoint on various lines of the following exercises. use the browser debugger to observe behavior.
// --- Ex.1: set basic breakpoints on some of these lines, and use watch to see what the state of the browser looks like ---
var label = "apples";
var appleInventory = 56;
var dozen = 12;

console.log(label);
console.log(appleInventory / dozen, " dozens");

// --- Ex.2: set breakpoints and step through the code to see where the issue is ---
var tax = 0.13;
label = 'apple inventory';
console.log(label, appleInventory, "tax", tax);

var price = 0.30;
label = `${label} is worth ${totalValue + totalTax} dollars.`;
console.log(label);

var totalValue = appleInventory * price;
var totalTax = totalValue * tax;

// --- Ex.3: step through the functions and see how the browser executes this code ---
function calculateTotal(inventory, pricePer) {
  calculateTax(inventory, tax);
  return inventory * pricePer;
}

function calculateTax(total, taxRate) {
  return total * taxRate;
}

totalValue = calculateTotal(appleInventory, price);
totalTax = calculateTax(totalValue, tax);

label = `${label} is worth ${totalValue + totalTax} dollars.`;
console.log(label);
