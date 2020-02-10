// URL: https://powerful-beyond-86109.herokuapp.com

let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
event.preventDefault();

    let name = event.target.name.value;
    let comment = event.target.comment.value;

    //make a action to axios with 2 arguments (url and an object)
    axios.post('https://powerful-beyond-86109.herokuapp.com/posts', 
    {
    name: name,
    comment: comment
    })
    .then(resolve => {
        console.log(resolve);
    })
    .catch(error => {
        console.log(error);
    });
});
