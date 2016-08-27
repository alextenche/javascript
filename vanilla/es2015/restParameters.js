'use strict';

function mixedParamsFunction (name, ...params) {
  console.log(name, params);
}
mixedParamsFunction('Alex', 1, 2, 3, 4, 'Alexone');


function onlyRestParamsFunction (...params) {
  console.log(params);
}
onlyRestParamsFunction('Alex', 1, 2, 3, 4, 'Alexone');
