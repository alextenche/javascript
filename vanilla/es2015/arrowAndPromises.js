'use strict';

var Teacher = function(data){
  this.name = data.name;
  this.greet = function(studentCount){
    let promise = new Promise(function(resolve, reject){
      if(studentCount === 0){
        reject('there are no students in class');
      } else {
        resolve('Hello to ${studentCount} students');
      }
    });
    return promise;
  }
}
