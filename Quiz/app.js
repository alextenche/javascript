// Create Questions

var q1 = new Question("Who was the first man on the Moon ?", ["Neil Armstrong", "Bon Jovi"], "Neil Armstrong");
var q2 = new Question("What is the answer to the ultimate question ?", ["PI", "42"], "42");

var questions = [ q1, q2 ];

// Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
