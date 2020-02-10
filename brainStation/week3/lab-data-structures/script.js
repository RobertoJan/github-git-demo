var stringArr = ["eat", "sleep", "game"];
console.log(stringArr);
console.log(stringArr[0]);
console.log(stringArr[2]);
console.log(stringArr[5]);

var stringArr = [];
stringArr.push("eat");
stringArr.push("sleep");
stringArr.push("game");

console.log(stringArr);
console.log(stringArr[0]);
console.log(stringArr[2]);
console.log(stringArr[5]);

stringArr.pop();
stringArr.pop();
stringArr.pop();

console.log(stringArr);

var myObject = {firstname: "Roberto", lastname: "Jan", doILikeCofee: false};

console.log(myObject);

var newObject = {};
newObject['firstname'] = "ROberto";
newObject['lastname'] = "Jan";
newObject.doILikeCoffee = false;

console.log(newObject);