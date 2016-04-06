import angular from 'angular';
import uiRouter from 'angular-ui-router';

import pokemon from './modules/pokemon';

let App = angular.module('app', [
  'ui.router',
  'tiy.pokemon'
]);
