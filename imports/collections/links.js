import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'links.insert': function() {  //wraping a . makes a key vaild
    
  }
});

export const Links = new Mongo.Collection('links');
