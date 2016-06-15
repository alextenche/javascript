var castle = {
  soldiers: 200,
  capacity: 300,
  keep: {
    soldiers: 19,
    capacity: 20,
    drawbridge: {
      soldiers: 5,
      capacity: 20,
      open: function(){
        alert("BANG?!");
      },
      close: function(){
        alert("clossing!")
      }
    }
  }
};

var reinforcements = 6;
if(castle.keep.drawbridge.capacity >= castle.keep.drawbridge.soldiers + reinforcements){
  castle.keep.drawbridge.open();
  castle.keep.drawbridge.soldiers += reinforcements;
  alert("Drawbridge soldiers: " + castle.keep.drawbridge.soldiers);
  castle.keep.drawbridge.close();
} else {
  alert("Reinforcements would require split unit.");
}

var reinforcements = 2;
with(castle.keep.drawbridge){
  if(capacity >= soldiers + reinforcements){
    open();
    soldiers += reinforcements;
    alert("Drawbridge soldiers: " + soldiers);
    close();
  } else {
    alert("Reinforcements would require split unit.");
  }
}

var reinforcements = 3;
var o = castle.keep.drawbridge){
  if(o.capacity >= o.soldiers + reinforcements){
    o.open();
    o.soldiers += reinforcements;
    alert("Drawbridge soldiers: " + o.soldiers);
    o.close();
  } else {
    alert("Reinforcements would require split unit.");
  }
}
