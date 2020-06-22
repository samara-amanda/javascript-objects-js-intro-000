var playlist = {
  artist: "Nicki Minaj",
  song: "Yikes"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'Slowdive'
  playlist[songTitle] = 'Alison'
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName] = 'Slowdive'
}
