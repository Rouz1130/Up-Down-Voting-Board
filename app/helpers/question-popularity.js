import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire popularity"></span>');
  }
  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-share-alt popularity"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
