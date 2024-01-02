const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin:"http://localhost:5173",
     methods: ["GET", "POST"]},
});

io.on("connection", (socket) => {
    console.log(`a user connected ${socket.id}`);
    
    socket.on("send_message", (data) => {
      socket.emit("receive_message", data);
    });
  });

server.listen(4000, () => { console.log("listening on *:4000"); });








// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');
// const cors = require('cors');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// // Use cors middleware
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Server is running.');
// });

// app.get('/check', (req, res) => {
//   console.log("API reached");
//   res.json({ data: "working" });
// });

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Example of sending and receiving messages
//   socket.on('message', (data) => {
//     console.log('Message from client:', data);

//     // Broadcast the message to all connected clients
//     io.emit('message', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// const port = process.env.PORT || 4000;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });





// // server.js
// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');
// const cors = require('cors'); // Add this line

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// // Use cors middleware
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Server is running.');
// });

// app.get('/check', (req, res) => {
//     console.log("api reached");
//        res.json({data:"working"});
//   });

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Example of sending and receiving messages
//   socket.on('message', (data) => {
//     console.log('Message from client:', data);

//     // Broadcast the message to all connected clients
//     io.emit('message', data);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// const port = process.env.PORT || 4000;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
