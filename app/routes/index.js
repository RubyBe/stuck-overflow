import Ember from 'ember';

var answers = [{
  id: 1,
  author: "Doc Gonzo",
  question: "How are you?",
  content: "Fine, thank you",
  details: "Not sure in which context this is meant.",
  image: "./public/docgonzo.jpg"
}];

export default Ember.Route.extend({
  model() {
    return answers;
  }
});
