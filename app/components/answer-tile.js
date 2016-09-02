import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateAnswerForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    delete(answer) {
      if (confirm("Sure?")) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
