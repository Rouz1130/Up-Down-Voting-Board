import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    questionSave1() {
      var params = {
        content:this.get('content') ? this.get('content') : "",
        author:this.get('author') ? this.get('author') : "",
        notes:this.get('notes') ? this.get('notes') : "",
      };
      this.set('addNewQuestion', false),
      this.sendAction('questionSave2', params);
    }
  }
});
