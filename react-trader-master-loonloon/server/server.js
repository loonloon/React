const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const feed = require("./feed");

io.on("connection", socket => {
  console.log("User connected. Socket id %s", socket.id);

  socket.on("join", rooms => {
    console.log("Socket %s subscribed to %s", socket.id, rooms);

    if (Array.isArray(rooms)) {
      rooms.forEach(room => socket.join(room));
    } else {
      socket.join(rooms);
    }
  });

  socket.on("leave", rooms => {
    console.log("Socket %s unsubscribed from %s", socket.id, rooms);

    if (Array.isArray(rooms)) {
      rooms.forEach(room => socket.leave(room));
    } else {
      socket.leave(rooms);
    }
  });

  socket.on("disconnect", () =>
    console.log("User disconnected. %s. Socket id %s", socket.id)
  );
});

feed.start((room, type, message) => io.to(room).emit(type, message));
http.listen(3000, () => console.log("listening on: 3000"));
