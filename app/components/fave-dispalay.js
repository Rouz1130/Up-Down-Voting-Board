import Ember from 'ember';

export default Ember.Component.extend({
  favedQuestions: Ember.inject.service('faved-questions')
});
