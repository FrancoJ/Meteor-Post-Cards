Cards = new Mongo.Collection('cards');

ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}

Cards.allow({
  update: function(userId, card) { return ownsDocument(userId, card); },
  remove: function(userId, card) { return ownsDocument(userId, card); },
});

