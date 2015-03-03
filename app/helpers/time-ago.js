import Ember from 'ember';

export function timeAgo(input) {
  return moment(new Date(input)).fromNow();
}

export default Ember.Handlebars.makeBoundHelper(timeAgo);
