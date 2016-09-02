import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  content: DS.attr(),
  details: DS.attr(),
  image: DS.attr()

});
