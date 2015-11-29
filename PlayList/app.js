var playlist = new Playlist();

var renegades = new Song("Renegades", "X-Ambasadors", "2:54");
var replica = new Song("Replica", "Sonata Artica", "3:12");

playlist.add(renegades);
playlist.add(replica);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById('next');
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById('stop');
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
