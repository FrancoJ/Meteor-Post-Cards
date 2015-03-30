/*****************************************************************************/
/* Modal: Event Handlers */
/*****************************************************************************/
Template.Modal.events({

'submit #newCardForm': function(e) {
    e.preventDefault();

    var card = {
      title: $(e.target).find('input[name=title]').val(),
      description: $(e.target).find('textarea[name=description]').val()
    };

    Meteor.call('createCard', card, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

    $('#newCardForm').reset();		
      Router.go('home');  
    });
  }

});

/*****************************************************************************/
/* Modal: Helpers */
/*****************************************************************************/
Template.Modal.helpers({
});

/*****************************************************************************/
/* Modal: Lifecycle Hooks */
/*****************************************************************************/
Template.Modal.created = function () {
};

Template.Modal.rendered = function () {
};

Template.Modal.destroyed = function () {
};
