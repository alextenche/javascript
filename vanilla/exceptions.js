function changeInnerHTMLByIdOrExisting(id, update, existing){
  try{
    var newElement = undefined;
    document.getElementById(id).innerHTML = update;
  } catch (error){
    try{
      var elements = document.getElementByTagName('*');
      for(var i = 0, x = elements.length; i < x; i++){
        if(elements[i].innerHTML === existing){
          elements[i].innerHTML = update;
          id = elements[i].id;
          break;
        }
        if(i === x) {
          throw new Error("An existing element was not found");
        }
      }
    } catch (error2){
      alert(error2.message + "\nCreating new text node.");
      newElement =  document.createTextNode(update);
    }
  } finally {
    if(newElement !== undefined){
      console.log("Returning new text node ....");
      return newElement;
    } else {
      console.log("Modified element " + (id || existing) + " with innerHTML " + update + "." );
    }
  }

}


changeInnerHTMLByIdOrExisting("age", "Age: 37", "Age: 38");
