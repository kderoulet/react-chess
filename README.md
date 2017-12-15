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

### Unsolved Problems
Socket.io is a beast. It's useful, and it's really cool when it works, but using websockets with React presents some strange difficulties. Many questions are raised by this combination--where should the connections be established? Where should the game itself be located? Where should state be maintained?

Although I've had plenty of luck with the default mode of socket.io, the implementation of rooms (as well as a differentiation between local and connected games) has been a little too challenging. Fully implementing this feature is next on my list.
### Future Features
With an app like this, the potential is endless. In addition to getting smoother socketing, I would love to add a timer feature to matched games, ensuring that players don't take too long in order to have wins. I would also like to persist player win-loss-draw records, as this could give the matched games a little extra weight.