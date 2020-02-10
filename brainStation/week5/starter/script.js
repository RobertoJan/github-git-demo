function Burger(toppings, protein, containsGluten, describe) {
    this.toppings = toppings;
    this.protein = protein;
    this.containsGluten = containsGluten;
    this.describe = describe;
    
}

let toppings = ['tomato', 'lettuce', 'cheese', 'mushroom'];
let protein = 'angus beef';
let containsGluten = true;
let describe = () => {
    return('this burger is made of ' + protein + 'and it has the following toppings: ' + toppings)
}

console.log(BurgerMaker.call(toppings, protein, containsGluten, describe));