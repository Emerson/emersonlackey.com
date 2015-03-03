import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      tweets: ajax('http://104.236.252.229/v1/timeline/emerson_lackey')
    });
  },

  afterModel: function(model) {
    console.log(model.tweets.tweets[0]);
    model.tweets = model.tweets.tweets.slice(0, 5);
  }

});
