import Ember from 'ember';

export default Ember.Component.extend({
  favedQuestions: Ember.inject.service('faved-questions'),

  actions: {
    remove(index) {
      this.get('favedQuestions').remove(index);
    }
  }
});
