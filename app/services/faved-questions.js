import Ember from 'ember';

export default Ember.Service.extend({
  favs: [],

  fave(question) {
    console.log("received");
    this.get('favs').pushObject(question);
    console.log(this.get('favs'));
  },
  remove(index) {
    this.get('favs').removeAt(index);
  }
});
