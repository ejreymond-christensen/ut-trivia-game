
var init = function(){
// Array of questions with wrong answers and a correct one.
  var questions = [
    {"question": "This is a question", "answers": {"correctAnswer": "snarf", "wrongAnswer1": "tygra", "wrongAnswer2": "cheetarah", "wrongAnswer3": "panthero" }},
    {"question": "This is another question", "answers": {"correctAnswer": "strider", "wrongAnswer1": "frodo", "wrongAnswer2": "samwise", "wrongAnswer3": "gandalf" }},
    {"question": "This is a new question", "answers": {"correctAnswer": "tyrion", "wrongAnswer1": "jaime", "wrongAnswer2": "cersie", "wrongAnswer3": "robb" }},
    {"question": "This is a newer question", "answers": {"correctAnswer": "arya", "wrongAnswer1": "sansa", "wrongAnswer2": "brann", "wrongAnswer3": "robb" }},
    {"question": "Question anew", "answers": {"correctAnswer": "snarf", "wrongAnswer1": "snarfsnarf", "wrongAnswer2": "snar", "wrongAnswer3": "sn" }},
    {"question": "Boring Question", "answers": {"correctAnswer": "chewbaka", "wrongAnswer1": "solo", "wrongAnswer2": "soulow", "wrongAnswer3": "so-low" }},
    {"question": "Mario Question", "answers": {"correctAnswer": "Yoshi", "wrongAnswer1": "toad", "wrongAnswer2": "luigi", "wrongAnswer3": "mario" }},
    {"question": "This question", "answers": {"correctAnswer": "foo", "wrongAnswer1": "bar", "wrongAnswer2": "foobar", "wrongAnswer3": "foofoobar" }},
  ];
  // randomize the Array (hangman)
  var questionRandomizer = function(){
    questions= questions.sort(function(a, b){
       return 0.5 - Math.random();
    });
    console.log(questions);
  };
  questionRandomizer();

  // append the array to the HTML;

  // have an on timer event that decends to 0 waitng for a click event.

  // If correct =correct modal with timeout, if incorrect a wrong modal with time out and a else (for time out) with a modal.

  // when the user finishes a tally of correct and wrong answers.

  // reset of game on a click event.

};

//runs init onload
window.onload = function(){
  init();
};
