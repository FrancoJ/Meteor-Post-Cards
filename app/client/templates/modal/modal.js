/*****************************************************************************/
/* Modal: Event Handlers */
/*****************************************************************************/
Template.Modal.events({

'submit form#newCardForm': function(e,tmpl) {
    e.preventDefault();

    var card = {
      title: tmpl.find('input[name=title]').value,
      description: tmpl.find('textarea[name=description]').value
    };

    Meteor.call('createCard', card, function(error, result) {
      // display the error to the user and abort
      if (error) {
        return alert(error.reason);
    } else {

    $('#newCard').modal('hide');
    tmpl.find('#newCardForm').reset();
}
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
