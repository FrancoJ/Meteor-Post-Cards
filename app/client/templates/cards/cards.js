

/*****************************************************************************/
/* Cards: Event Handlers */
/*****************************************************************************/
Template.Cards.events({
 



});

/*****************************************************************************/
/* Cards: Helpers */
/*****************************************************************************/
Template.Cards.helpers({
	'cards': function() {
		return Cards.find({}, {sort: {createdAt: -1}});
	},
	'time': function() {
		return moment(this.createdAt).fromNow();
	}
});



/*****************************************************************************/
/* Cards: Lifecycle Hooks */
/*****************************************************************************/
Template.Cards.created = function () {
};

Template.Cards.rendered = function () {



};

Template.Cards.destroyed = function () {
};


