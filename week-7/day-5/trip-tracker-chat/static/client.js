
const usernameTextBox = document.getElementById("usernameTextBox")
const chatMessageTextBox = document.getElementById("chatMessageTextBox")
const sendButton = document.getElementById("sendButton")
const messagesUL = document.getElementById("messagesUL")

// sends message to server on button click
sendButton.addEventListener('click', () => {
    const username = usernameTextBox.value
    const chatMessage = chatMessageTextBox.value
    let chat = {username: username, message: chatMessage}
    socket.emit('Houston', chat)
})




// lets client listen for server
socket.on('Houston', (chats) => {
    // attempt to get chat history showing
    messagesUL.innerHTML = ""
    for (let index = 0; index < chats.length; index++) {
        let chat = chats[index]
        let messageItem = `<li>${chat.username}: ${chat.message}</li>` 
        messagesUL.insertAdjacentHTML('beforeend', messageItem)
    }
})

