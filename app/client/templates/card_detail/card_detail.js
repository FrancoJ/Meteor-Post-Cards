/*****************************************************************************/
/* CardDetail: Event Handlers */
/*****************************************************************************/
Template.CardDetail.events({
	'click .delete': function() {
    if (confirm("Delete this post?")) {
      var currentCardId = this._id;
      Cards.remove(currentCardId);
      Router.go('home');
    }		
	}
});

/*****************************************************************************/
/* CardDetail: Helpers */
/*****************************************************************************/
Template.CardDetail.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
});

/*****************************************************************************/
/* CardDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.CardDetail.created = function () {
};

Template.CardDetail.rendered = function () {
};

Template.CardDetail.destroyed = function () {
};
