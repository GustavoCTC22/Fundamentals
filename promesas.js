// const usingPromise = (a, b) => {
//   const resultado = a + b;

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(resultado);
//     });
//   });
// };
// usingPromise(15, 20).then((result) => console.log(result));

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function gettingPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => displayPokemon(data))
    .catch((error) => console.error("Error fetching Pokémon data:", error));
}

function displayPokemon(pokemon) {
  const pokemonInfoDiv = document.getElementById("pokemon-info");

  const templatePokemon = `

  `;
}

gettingPokemon();
