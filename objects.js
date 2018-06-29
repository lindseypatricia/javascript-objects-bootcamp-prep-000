var playlist = {
  'My Bloody Valentine': 'Sometimes',
  'Slowdive': 'Alison',
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")