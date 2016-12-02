'use strict';

function truthyChecker(isTruthy){
  if(isTruthy){
    console.log(isTruthy + ' is thruty');
    return true;
  } else {
    console.log(isTruthy + ' is falsey');
    return false;
  }
};

truthyChecker(true);
console.log('string false');
truthyChecker("false");
truthyChecker(0);
