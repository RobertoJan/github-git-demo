// (1) You have an array of words.  Words that start with "F" are bad words
// Bellow is a function to remove the bad words from the array
// Create another function using a higher order function that will reduce the amount of code written
let words = [ "Bottle", "Telescope", "Durian", "Keys", "Family", "Chocolate", "Fiddle", "Train", "Headphones", "Laptop" ];

filterOut = arr => {
    filtered = [];
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i][0] !== "F") {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  };

// TODO: write your code below

betterFilter = array => {
  return array.filter(word =>[0])
}



// (2) Wheres Waldo?
// You have an line of people with a function to find Waldo in that line
// Create a higher order function that will find Waldo
let people = [ "Iskandar", "Marielle", "Hadi", "Waldo", "Andrew", "Farhan", "Paulo", "Roisin", "Ed", "Ted" ];
// TODO: write your code below

findWaldo = (array) => {
  return array.find(person => person=== 'Waldo')
}





// (3) Great! You have found Waldo! But can you write a function that finds where he was in the line?
// TODO: write your code below

// (4) Create a function that will reverse the order of the numbers bellow
let backwardNumbers = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
// TODO: write your code below

backwardNumbers.reverse();
console.log(backwardNumbers);

// (5) Did you reverse the array?  Yes?!  Great!  Now, reverse the array without effecting the original array
// You will have to comment out your solution above! 
// TODO: write your code below
rev = (array) => {

}


// (6) Create a function that will reverse the sentence below
let backwardSentence = ".lamron ot ecnatnes siht nruter lliw taht noitcnuf a etaerC  !pu dessem lla si ecnetnes sihT"
// TODO: write your code below

backwardSentence.split('')
console.log