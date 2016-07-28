'use strict';

var imUndefined;
var imNull = null;

function defaultParameters(param){
  if(param === undefined){
    param = "some value we set";
  }
  console.log(param);
  return param;
};

defaultParameters(imUndefined);
defaultParameters(imNull);
