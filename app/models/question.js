import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  votes: DS.attr('number', { defaultValue: 0 }),
  answers: DS.hasMany('answer', { async: true })
});
