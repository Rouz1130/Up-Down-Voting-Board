import Ember from 'ember';

export default Ember.Component.extend({
  favedQuestions: Ember.inject.service('faved-questions'),
  actions: {
    upvote(question){
      this.sendAction('upvote', question);
    },
    downvote(question){
      this.sendAction('downvote', question);
    },
    fave(question){
      console.log("click");
      this.get('favedQuestions').fave(question);
    }
  }
});
