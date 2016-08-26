'use strict';

var Teacher = function (data) {
  this.name = data.name;
  this.greet = function (studentCount) {
    let promise = new Promise(function(resolve, reject){
      if (studentCount === 0) {
        reject('there are no students in class');
      } else {
        resolve('Hello to ${studentCount} students');
      }
    });
    return promise;
  }
}

var Classrom = function (data) {
  this.subject = data.name;
  this.teacher = data.teacher;
  this.students = [];
  this.addStudent = function (data) {
    this.students.push(data);
    this.greet();
  }
  this.greet = () => {
    this.teacher.greet(this.students.length).then(
      greeting => console.log(`${this.teacher.name} says: `, greeting),
      err => console.log(err)
    );
  }
}

var myTeacher = new Teacher({name: 'James'});
var myClassroom = new Classrom({name: 'Learning ES2015', teacher: myTeacher});

myClassroom.addStudent({name: 'Alex'});
