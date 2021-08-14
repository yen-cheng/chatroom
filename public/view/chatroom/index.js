const socket = io();
const sendMsg = () => {
    let message = document.getElementById("inputMsg").value;
    if (message) {
        socket.emit('message from client', message);
        document.getElementById("inputMsg").value = '';
    }
}
const inputMsg = document.getElementById("inputMsg");
inputMsg.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("sendMsgBtn").click();
    }
  });

socket.on('server to client', (msg) => {
    console.log(msg);
});