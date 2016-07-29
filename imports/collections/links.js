import { Mongo } from 'meteor/mongo';
import vaildUrl from 'valid-url';
import { check, Match } from 'meteor/check'

Meteor.methods({
  'links.insert': function(url) {  //wraping a . makes a key vaild
    check(url, Match.Where(url => vaildUrl.isUri(url)));
    console.log('attempting to save', url);
  }
});

export const Links = new Mongo.Collection('links');
