import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,

  authoredAnswer: Ember.computed('answer.author', 'answer.content', function() {
    return this.get('answer.content') + ' \(contributed by ' + this.get('answer.author') + '\)';
  }),

  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});
