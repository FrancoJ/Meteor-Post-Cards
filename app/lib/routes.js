Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('/card/:_id', {
  name: 'cardDetail',
  controller: 'CardDetailController',
  action: 'action',
  where: 'client'
});