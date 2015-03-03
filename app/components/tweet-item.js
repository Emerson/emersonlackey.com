import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',
  classNames: 'tweet',

  didInsertElement: function() {
    this.$().html(Autolinker.link(this.$().html()));
  }

});
