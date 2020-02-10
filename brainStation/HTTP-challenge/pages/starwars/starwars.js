getStarships = () => {
  // Place GET Request here
  axios.get(url)
  .then (response => {console.log(response.dats.results)
    postShip(response.data.results)
  })
};

getStarships();


postShip = (results, i) => {
  let starwarsContainer = document.querySelector(".starwars-container");

  let ship = document.createElement("p");
  // ship.innerHTML = ** set the innerHTML to the starship name here
  starwarsContainer.appendChild(ship);
};

