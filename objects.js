var playlist = {
  'My Bloody Valentine': 'Sometimes',
  'Slowdive': 'Alison',
}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })
}

function removeFromPlaylist(playlist, artist) {
  return Object.assign({}, playlist, delete.artist)
}