CardDetailController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('card', this.params._id);
  },

  data: function () {
     return Cards.findOne({_id: this.params._id});
  },

  action: function () {
    this.render('CardDetail', { /* data: {} */});
  }
});
