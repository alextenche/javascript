// Create Questions

var q1 = new Question("Who was the first man on the Moon ?", ["Neil Armstrong", "Bon Jovi", "Neil Young"], "Neil Armstrong");
var q2 = new Question("What is the answer to the ultimate question ?", ["PI", "42", "undefined"], "42");

var questions = [ q1, q2 ];

var quiz = new Quiz(questions);

QuizUI.displayNext();
