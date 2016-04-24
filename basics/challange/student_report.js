"use strict";

var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  output.innerHTML = message;
}

function getStudentReport(student) {
  var report = "<h2>Student: " + student.name + "</h2>";
  report += "<p>Track: " + student.track + "</p>";
  report += "<p>Points: " + student.points + "</p>";
  report += "<p>Achivements: " + student.achievements + "</p>";
  return report;
}

var search;
while(true){
  search = prompt("Search for student (or type quit to exit)");
  if(search === null || search.toLowerCase() === "quit"){
    break;
  }
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if(search === student.name){
      message = getStudentReport(student);
      print(message);
    }
  }

}
