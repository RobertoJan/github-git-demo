var time = 10;
if (time < 10) {
    console.log("You are early");
}
else if (time =10) {
    console.log("you are on time");
}
else {
    console.log("you are late");
}


var timeOfWeek = "weekend";
if (timeOfWeek = "weekday") {
    console.log("welcome web dev");

}
    else {
        console.log("you shouldn't be in class");
    }


var facialExpression = "sleepy";
switch (facialExpression) {
case "smiling":
    console.log("you look happy");
    break;
case "frowning":
    console.log("you look sad");
    break;
case "scowl":
    console.log("you look angry");
    break;
case "sleepy":
    console.log("you look sleepy");
    break;
}

var famousCats = ["kuro", "shiro", "neko"];

for (var i = 0; i < famousCats.length; i = i+ 1) {
    console.log(famousCats[i]);
}