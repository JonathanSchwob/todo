angular.module('app', ['ui.router', 'pageModule'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/page');

  $stateProvider

  .state('page', {
    url: '/page',
    templateUrl: './page.html',
    controller: 'pageController',
  });
});