'use strict';

function submit (name, comments, ratting = 5) {
  let data = { name, comments, ratting };

  for (let key in data) {
    console.log(key + ':' + data[key]);
  }
}

submit('English', 'great course');
submit('English', 'great course', 9);
