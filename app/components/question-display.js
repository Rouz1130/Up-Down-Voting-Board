import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:desc'],
  sortedQuestions: Ember.computed.sort('model.questions', 'sortBy'),

  actions: {
    upvote(question){
      this.sendAction('upvote', question);
    },
    downvote(question){
      this.sendAction('downvote', question);
    },
  }
});
