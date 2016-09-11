import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    answerSave1() {
      var params = {
        user:this.get('user') ? this.get('user') : "",
        text:this.get('text') ? this.get('text') : "",
        question:this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('answerSave2', params);
    }
  }
});
