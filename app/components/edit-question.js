import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    editQuestion(question) {
      var params = {
        content:this.get('content'),
        notes:this.get('notes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', question, params);
    }
  }
});
