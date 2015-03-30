/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/


Meteor.methods({
  createCard: function(cardAttributes) {
    check(Meteor.userId(), String);
    check(cardAttributes, {
      title: String,
      description: String
    });
    var user = Meteor.user();
    var card = _.extend(cardAttributes, {
      userId: user._id, 
      author: user.username, 
      createdAt: new Date()
    });
    var cardId = Cards.insert(card);
    return {
      _id: cardId
    };
  }



});