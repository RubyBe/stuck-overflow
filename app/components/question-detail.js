import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      if (confirm("You sure?")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
