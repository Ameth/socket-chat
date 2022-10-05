const socket = io();

const btnSend = document.getElementById("send-message");
const allMessages = document.getElementById("all-messages");
const messageText = document.getElementById("message");

const username = document.cookie.replace(
  /(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

btnSend.addEventListener("click", () => {
  socket.emit("message", {
    user: username,
    message: messageText.value,
  });

  messageText.value = "";
});

socket.on("message", (data) => {
  const { user, message } = data;

  const msg = document.createRange()
    .createContextualFragment(`<div class="message">
            <div class="image-container">
                <img src="/images/profile.jpg" alt="">
            </div>
            <div class="message-body">
                <div class="user-info">
                    <span class="username">${user}</span>
                    <span class="time">Hace 1 segundo</span>
                </div>
                <p>${message}</p>
            </div>
        </div>`);

  allMessages.append(msg);
});
