"use strict";

var reqs = ["smart", "beautifull", "bold"];
var list = document.getElementById("reqs");
var fragment = document.createDocumentFragment();
var element;

for (var i = 0, x = reqs.length; i < x; i++) {
  element = document.createElement("li");
  element.appendChild(document.createTextNode(reqs[i]));
  fragment.appendChild(element);
}

list.appendChild(fragment);
