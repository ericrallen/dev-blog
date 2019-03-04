---
path: /elite-dangerous-journal-server
title: Elite Dangerous Journal Server
link: 'https://github.com/DVDAGames/elite-dangerous-journal-server'
postType: projectPost
blurb: WebSocket server to broadcast events from the video game Elite Dangerous.
featured: true
---
Elite Dangerous updates a file with a "Captain's Log" of sorts as you play the game
and there is a vibrant ecosystem of 3rd party apps that run alongside the game. There
wasn't a simple way to allow a user to broadcast these events across their network
or to allow apps to consume them in a normalized manner.

This project provides a simple WebSocket server with ZeroConf/Bonjour networking capabilities
to help facilitate developers creating applications that integrate with the game.
