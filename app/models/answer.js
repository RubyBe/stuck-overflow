import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.belongsTo('question', { async: true}),
  content: DS.attr(),
  details: DS.attr()
});
