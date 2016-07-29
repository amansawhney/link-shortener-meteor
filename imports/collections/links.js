import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'links.insert': function(url) {  //wraping a . makes a key vaild
    url += '.com'
    console.log('attempting to save', url);
  }
});

export const Links = new Mongo.Collection('links');
