
var sectionTitle = document.getElementById('sectionTitle');

console.log('This is an element of type', sectionTitle.nodeType);
console.log('This is the innerHTML', sectionTitle.innerHTML );
console.log('ChildNodes', sectionTitle.childNodes.length);

var docP = document.getElementsByTagName('p');

console.log('The number of paragraphs', docP.length);

