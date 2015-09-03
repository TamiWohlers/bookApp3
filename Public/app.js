var app = angular.module('bookApp2', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(
        '/home'
    )

    $stateProvider
        .state('cartView', {
            url: '/cartView',
            templateUrl: 'Views/cartView.html',
            controller: 'cartCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'Views/homeView.html',
            controller: 'homeCtrl'

        })
        .state('toReadView', {
            url: '/toReadView',
            templateUrl: 'Views/toReadView.html',
            controller: 'toReadCtrl'
        })
        .state('haveRead', {
            url: '/haveRead',
            templateUrl: 'Views/haveReadView.html',
            controller: 'haveReadCtrl'

        })
        .state('favorites', {
            url: '/favorites',
            templateUrl: 'Views/favoritesView.html',
            controller: 'favoritesCtrl'
        })
        .state('userView', {
            url: '/userView',
            templateUrl: 'Views/userView.html',
            controller: 'userCtrl'
        })




});
