getFirePokemon = () => {
  // Place GET Request here
  axios.get(url)
  .then(data => { console.log(response.data.pokemon) }
  postPokemon
};

getFirePokemon();

postPokemon = (results, i) => {
  let pokemonContainer = document.querySelector(".pokemon-container");

  let pokemon = document.createElement("p");
  // pokemon.innerHTML = set innerHTML to the pokemon name here
  pokemonContainer.appendChild(pokemon);
};
