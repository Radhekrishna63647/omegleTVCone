// Welcome screen and Facebook login
function facebookLogin() {
    // Mockup for Facebook login
    alert('Logging in with Facebook...');
    document.querySelector('.welcome-container').classList.add('hidden');
    document.querySelector('.chat-container').classList.remove('hidden');

    // Mock username
    const username = 'Facebook User';
    document.getElementById('username').innerText = username;
}

// Basic chat functionality
function connectUser() {
    document.getElementById("chat-box").innerHTML += "<p>Connecting to a random user...</p>";
    // Add logic for WebRTC connection setup if available
}

function disconnectUser() {
    document.getElementById("chat-box").innerHTML += "<p>You have disconnected.</p>";
    // Add logic to close WebRTC connection if available
}

function sendMessage() {
    let message = document.getElementById("message").value;
    if (message) {
        document.getElementById("chat-box").innerHTML += `<p>You: ${message}</p>`;
        document.getElementById("message").value = "";
        // Code to send message via WebSocket can be added here
    }
}
