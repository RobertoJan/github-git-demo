
let form = document.querySelector('form');

form.addEventListener('submit', (eventObj) => {
    eventObj.preventDefault();

    let pass1 = eventObj.target.password.value;
    let pass2 = eventObj.target['confirm-password'].value;

    if(pass1 === pass2) {
        console.log('Name `${eventObj.target.name.value}`)
    }

});