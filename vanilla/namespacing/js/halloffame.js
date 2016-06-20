"use strict";

var HOFMASTER = {
  list: ["Blade", "Daywalker", "BonJovi"],
  hof: document.getElementById("hof"),
  fragment: document.createDocumentFragment(),
  element: undefined,
  displayHOF: function(){
    for (var i = 0, x = this.list.length; i < x; i++) {
      this.element = document.createElement("li");
      this.element.appendChild(document.createTextNode(this.list[i]));
      this.fragment.appendChild(this.element);
    }
    this.hof.appendChild(this.fragment);
  }
};
