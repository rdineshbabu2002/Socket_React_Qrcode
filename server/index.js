const http = require("http");
const server = http.createServer();
const express = require("express");
const io = require("socket.io")(server, {
  cors: { origin: "*" },
});
var cors = require("cors");
io.on("connection", (socket) => {
  console.log("new client connected");
  socket.on("data", (id) => {
    socket.emit("message", id);
  });
  socket.on("connecteduser", (id) => {
    console.log(id);
    socket.on("Submitted" + id, () => {
      io.emit("message" + id, "submitted");
    });
  });
  socket.on("Submitted", () => {
    io.emit("message", "submitted");
  });
});
const app = express();
app.get("/", (req, res) => {
  res.status(200).json({ data: "hii" });
});

server.listen(8000, () => console.log(`Listenniong to port 8000`));
