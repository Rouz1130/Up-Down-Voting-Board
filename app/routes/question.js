import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(question) {
      var answerDeletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answerDeletions).then(function() {
        question.destroyRecord();
      });
      this.transitionTo('index');
    },

    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },

    answerSave3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    editAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question', params.question);
    },

    deleteAnswer(answer) {
      answer.destroyRecord();
    },

    upvote(answer) {
      answer.incrementProperty('votes');
      answer.save();
    },

    downvote(answer) {
      answer.decrementProperty('votes');
      answer.save();
    },
  }
});
