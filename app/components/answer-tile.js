import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(answer, params) {
      this.sendAction('editAnswer', answer, params);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    upvote(answer){
      this.sendAction('upvote', answer);
    },
    downvote(answer){
      this.sendAction('downvote', answer);
    },
  }
});
