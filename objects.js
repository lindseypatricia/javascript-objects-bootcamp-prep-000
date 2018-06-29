var playlist = {
  'My Bloody Valentine': 'Sometimes',
  'Slowdive': 'Alison',
}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")