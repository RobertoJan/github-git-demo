let inp1 = document.getElementsByClassName('demo-add__input')[0];
let inp2 = document.getElementsByClassName('demo-add__input')[1];
let addAction = document.getElementsByClassName('demo-add__action')[0];
let result = document.getElementsByClassName('demo-add__result')[0];
let store;

// --- Ex.1 ---
// TODO: the console.log()'s in the following code are supposed to print the same sum, but they don't....what's wrong with the code?
let name = "User";
let number1 = 10;
let number2 = 20;
let sum;

function add(a, b) {
  number1 = 50; // side effect
  sum = a + b;
  return a + b;
}

console.log(name + " added 2 numbers and got " + add(number1, number2));
console.log(name + " added those 2 numbers again and got " + add(number1, number2));

// --- Ex.2 ---
// NOTE: you don't have to touch any of the code here other than the function below.
function add(a, b) {
  // TODO: fix the following code to make the calculator on the page correctly add 2 numbers together.
  return a + b;
}

function updateLabel(e) {
  let sum = add(inp1.value, inp2.value);
  store = sum;
  result.innerHTML = sum;
}

addAction.addEventListener('click', updateLabel);