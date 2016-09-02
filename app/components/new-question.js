import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set("addNewQuestion", true);
    },
    saveQuestion() {
      var params = {
        title: this.get("title"),
        content: this.get("content"),
        answer: this.get("answer")
      };
      this.set('addNewQuestion, false');
      this.sendAction('saveQuestion', params);
    }
  }
});
