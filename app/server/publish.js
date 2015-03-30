/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('cards', function () {
  return Cards.find({}, {sort: {createdAt: -1}});
});