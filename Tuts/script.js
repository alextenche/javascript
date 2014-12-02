
//var sectionTitle = document.getElementById('sectionTitle');

//console.log('This is an element of type', sectionTitle.nodeType);
//console.log('This is the innerHTML', sectionTitle.innerHTML );
//console.log('ChildNodes', sectionTitle.childNodes.length);

//var docP = document.getElementsByTagName('p');
//var myList = document.getElementById('mgj2');
//var listItems = myList.getElementsByTagName('li')

//console.log('The number of paragraphs', docP.length);
//console.log('The number of list items', listItems.length);

//var myElement = document.getElementById('rightColumn');
//myElement.setAttribute("align","right");

//var sectionAside = document.getElementById('rightColumn');

//console.log('This is the innerHTML ', sectionAside.innerHTML);


var myHeading = document.createElement('h3');
var myParagraph = document.createElement('p');

var h3Text = document.createTextNode('1933 MG J2 Facts');
var pText = document.createTextNode("The Mg J2 was the first");

myHeading.appendChild(h3Text);
myParagraph.appendChild(pText);

document.getElementById('sideNote').appendChild(myHeading);
document.getElementById('sideNote').appendChild(myParagraph);


