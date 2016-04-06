class PokemonController {
  constructor($http) {
    this.newPokemon = "";
    this._$http = $http;

    this.pokemons = [];
  }

  addPokemon() {
    this._$http
      .get(`http://pokeapi.co/api/v2/pokemon/${this.newPokemon}`)
      .then((response) => {
        this.pokemons.push(response.data);
        this.newPokemon = "";
      });
  }

  deletePokemon(pokemon) {
    let confirmed = confirm(`Are you sure you want to delete ${pokemon.name}?`);

    if (confirmed) {
      this.pokemons.splice(this.pokemons.indexOf(pokemon), 1);      
    }
  }
}

export default PokemonController;
