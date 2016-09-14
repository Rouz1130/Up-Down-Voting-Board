import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(question) {

    },
      downvote(question) {
        this.sendAction('downvote', quesiton);
      },
  }
});
