function RouteConfig($stateProvider, $httpProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('chatroom', {
      url: '/chatroom',
      template: '<chatroom></chatroom>'
    });
}

module.exports = RouteConfig;
