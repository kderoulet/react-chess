# React Chess

by Kevin de Roulet

![Chess Screencap](https://i.imgur.com/8snNa4N.png)

### Chess, built with React
Chess is awesome. Versions of chess have been played for over a thousand years, and today millions of people around the world play it for recreation or competition. Chess is ever-evolving, mentally stimulating, and thoroughly enjoyable. 

For many, chess is also a nostalgic game--I personally have fond memories of losing to my parents and to the computer (R.I.P Chessmaster 3000) as a kid, and so I've nostalgically themed this chess app, built in React.

### The App Itself

Deployed app is playable [here](https://chessforreact.herokuapp.com/)

Github Repo is viewable [here](https://github.com/kderoulet/react-chess)

And the Trello can be enjoyed [here](https://trello.com/b/RHuGRTJK/react-chess)

### Technologies Used
- React.js
- Node.js
- Express.js
- Mongo.db (Mongoose)
- JSON web tokens
- Socket.io

### Technologies Not Used
- Chess.js
- Chessboard.js

Why is this important? Look at virtually every website with chess on it out there--just about each one of them uses chess.js and chessboard.js. I wanted to blaze my own trail on this one. 

### Sockets in action

![Socket Gif](https://media.giphy.com/media/3ohjUS3g4OBE4Qm3Ti/giphy.gif)

### Unsolved Problems
As I implemented Socket.io, I realized that a better route to take would have been writing game logic and move-handling server side. Were I to start again with this project, I likely would have built out the sockets first, later implementing the game logic so that the sockets are not forced to fit around the already existing game logic. 

### Future Features
With an app like this, the potential is endless. I would love to add a timer feature to matched games, ensuring that players don't take too long in order to have wins. I would also like to persist player win-loss-draw records, as this could give the matched games a little extra weight.