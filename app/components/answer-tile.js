import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(answer, params) {
      this.sendAction('editAnswer', answer, params);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    }
  }
});
