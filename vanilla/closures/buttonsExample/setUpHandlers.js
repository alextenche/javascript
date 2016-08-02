'use strict';

var buttons = document.getElementsByTagName('button');

function createHandler(name){
  return function(){
    console.log(name);
  };
}

for (var i = 0; i < buttons.length; i += 1) {
  var button = buttons[i];
  var buttonName = button.innerHTML;
  console.log(button);
  button.addEventListener('click', createHandler(buttonName));
}
