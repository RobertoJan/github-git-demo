const greeter = msg => ('hello' + msg);

const personGreeter = (personName, greeterFn) => {
    console.log(personName + 'says ' + greeterFn(' have a good day.'));
}

personGreeter('Daniil', greeter);


const animal =  ['fish', 'beetle', 'potato'];

for (let i = 0; i < animal.length; i++) {
    console.log('I am animal', animal[i])
}

animal.forEach(value => {
    console.log('I am declaritive animal, value');
})


const animalMap = [
    { type: 'cat', likes: "fish" },
    { type: 'dog', likes: 'cat'},
    { type: 'shark', likes 'capybara'}
];

let animalMapConverted animalMap.map (animalObj => {
    return `${animalObj.type} likes ${animalObj.likes}`;
}
    ) ;
    console.log ('MAPPED' animalMapConverted);

    const fishLovingAnimals = animal


    
