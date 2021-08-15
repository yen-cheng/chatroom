const socket = io();
console.log(socket);
const sendMsg = () => {
    let message = document.getElementById("inputMsg").value;
    let nickName = document.getElementById("nickname").value;
    if (message) {
        let msgObj = {
            nickName,
            message
        }
        socket.emit('message from client', JSON.stringify(msgObj));
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
    console.log(JSON.parse(msg));
});