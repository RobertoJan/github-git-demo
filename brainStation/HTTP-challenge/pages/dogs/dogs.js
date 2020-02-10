getDoggies = () => {
  // Place Get Request code here
  const url = 'https://dog.ceo/api/breeds/image/random/20';
  axios.get(url)
  .then(response => {console.log(response)})
  .catch(err => console.log(err))
};

postDogs = (results, i) => {
  let container = document.querySelector(".dogs-container");

  let dog = document.createElement("img");
  // dog.setAttribute("src", ** Set the image to the src here **);
  dog.className = "dog-img";
  container.appendChild(dog);
};

getDoggies();