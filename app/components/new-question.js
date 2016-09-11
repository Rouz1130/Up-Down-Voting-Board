import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    questionSave1() {
      var params = {
        text: this.get('text') ? this.get('text') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        votes: 0,
      };
      this.set('addNewQuestion', false),
      this.sendAction('questionSave2', params);
    }
  }
});
