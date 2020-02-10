var nav = document.getElementById ('nav-bar');
console.log(nav);

document.querySelector ('main');

var allA = document.querySelectorAll('a');

let timerID = setTimeout(function() {
    console.log('TIMEOUT HAS RUN')
}, 1000);

var logo = document.querySelector('.header-item');
console.log('current innerHtml', logo)


var multiElementsTimeout = setTimeout(function()){
    let allLinks = document.querySelectorAll('a');
    allLinks.forEach(function(element) {
        console.log('CURR ELEMENT', element.innerHTML);
    })
}

