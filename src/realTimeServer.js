module.exports = (httpServer) => {
  const { Server } = require("socket.io");

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    // console.log(socket.id);

    const cookie = socket.handshake.headers.cookie;
    const username = cookie.split("=").pop();
    // console.log(cookie);

    socket.on("message", ({ user, message }) => {
      io.emit("message", {
        user: username,
        message,
      });
    });
  });
};
