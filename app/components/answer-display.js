import Ember from 'ember';

export default Ember.Component.extend({
    sortBy: ['votes:desc'],
    sortedAnswers: Ember.computed.sort('model.answers', 'sortBy'),

    actions: {
      upvote(answer){
        this.sendAction('upvote', answer);
      },
      downvote(answer){
        this.sendAction('downvote', answer);
      },
      editAnswer(answer, params){
        console.log("answers-display");
        this.sendAction('editAnswer', answer, params);
      },
      deleteAnswer(answer){
        this.sendAction('deleteAnswer', answer);
      },
    }
});
