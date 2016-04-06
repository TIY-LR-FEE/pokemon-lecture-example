function config($stateProvider) {
  $stateProvider
    .state('pokemon', {
      url: '/',
      controller: 'PokemonController as pokemonCtrl',
      template: require('./view.html')
    });
}

export default config;
