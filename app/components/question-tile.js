import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(question) {

    },
      downVote(question) {
        this.sendAction('downVote', quesiton);
      },
  }
});
