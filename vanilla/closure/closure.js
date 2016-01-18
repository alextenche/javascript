
window.onload = function(){
  var output = document.getElementById('output');
  var closure = new myClosure2();
  output.innerHTML = closure.foo();

  window.setTimeout(function(){
    output.innerHTML += '<br />' + closure.foo();
  }, 500);

}


function myNonClosure(){
  var date = new Date();
  return date.getMilliseconds();
}


function myClosure(){
  var date = new Date();
  return function(){
    return date.getMilliseconds();
  };
}


var myClosure2 = function (){
  var date = new Date(),
    myNestedFunction =  function(){
      return date.getMilliseconds();
    };
  return {
    foo: myNestedFunction
  };
}
