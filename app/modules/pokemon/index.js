import angular from 'angular';

import config from './config';
import controller from './controller';

let pokemon = angular.module('tiy.pokemon', []);

pokemon.config(config);
pokemon.controller('PokemonController', controller);

export default pokemon;
