/* 
  --- setup ---
 */
let customers = [
  {
    name: 'Iron Man',
    groceries: [
      'Apples',
      'Milk',
      'Potatoes',
      'Peppers'
    ]
  },
  {
    name: 'Spiderman',
    groceries: [
      'Cereal',
      'Instant Noodles'
    ]
  },
  {
    name: 'Captain Marvel',
    groceries: [
      'Fish',
      'Eggs',
      'Bread'
    ]
  },
  {
    name: 'Doctor Strange',
    groceries: []
  }
];

// (1) TODO: write a function 'addCustomer' that adds a new customer to the list of customers.
// The added customer must have the same two keys just like the other customers.
// The function must take a name, and a list of groceries. The function does not return anything.

let addCustomer = ("name", "groceries") => {
  if (newName === undefined || newName ==="" || newName === null){return "Cannot add customer"}
  if (newGroceries === undefined || newGroceries ==="" || newGroceries === null){return []}
  customers.push ({
    name: newName,
    groceries: newGroceries
  })
;

// (2) TODO: Modify the function from step (1) to return a string saying 'Cannot add customer. Please provide a name!'
// if no name is provided.

addCustomer = ("name", "groceries") => {
  if ("name = ") {
    return "Cannot add customer"
  }
};


// (3) TODO: Modify the function from step (1) to set groceries to an empty list if no groceries are given!

addCustomer = ("name", "groceries") => {

}

// (4) TODO: write a function 'getAllNames' that goes through all the customers
// and returns an array of all the names.
// The function takes no parameters, returns an array of names.

let getAllNames = () => {
  let names = [];
  for (i = 0; i < customers.length ; i++ ){
    names.push(customers[i].name)
  }
  return names
}

// (5) TODO: write a function called 'getGroceriesOf' that returns the grocery list of a specified customer
// The function must take 1 parameter called 'name'. Returns a list.

let getAllGroceries = (custName) => {
  for (i = 0 ; i < customers.length ; i++){
    if (fustomers[i].name === custName) {
      return customers[i].groceries
    }
  }
}

// (6) TODO: write a function called 'removeGrocery' that removes an item from
// a specified customer's grocery list.
// The function takes 2 parameters: a name, and the index of the item to remove.

// (7) TODO: Modify the function in (6) to use the function made in (5).

// (BONUS) TODO: Modify the function in (6, 7) to remove an item by name instead of index.
// (BONUS) TODO: write a function 'getAllGroceries' that does something similar to (4). Go through all the customers,
// and return an array of all the groceries as one big list.
// The function takes no parameters, returns an array.

let farm = document.querySelector('form');
  form.addEventListener('submit', (eventObj) => { eventObj.preventDefault();
  
    let firstName = eventObj.target.firstname.value;
    let lastName = eventObj.target.lastname.value;

  
  console.log(eventObj.target.firstname);
  
  });