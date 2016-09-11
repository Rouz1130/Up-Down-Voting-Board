import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    editQuestion(question) {
      var params = {
        text:this.get('text'),
        notes:this.get('notes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', question, params);
    }
  }
});
