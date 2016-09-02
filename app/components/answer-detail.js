import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if(confirm("You sure?")) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
