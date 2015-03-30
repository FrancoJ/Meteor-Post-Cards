HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  	this.subscribe('cards');
  },

  action: function() {
    this.render('Cards');
  }
});
