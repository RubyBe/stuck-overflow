import Ember from 'ember';

export function answerCount(params/*, hash*/) {
  var question = params[0];
  var answerCount = question.get('answers').get('length');
  return answerCount;
}

export default Ember.Helper.helper(answerCount);
