
const messagesList = document.querySelector('.messages-list');
const renderMessages = () => {
    messagesList.innerHTML = '';
    messages.forEach((message) => {
        const messageElement = `<li class="message-item" id = "${message.id}">
                    <a href="#">
                        <div class="user-avatar">M</div>
                        <div class="message-info">
                            <h3>${message.sender}</h3>
                            <p>${message.content}</p>
                        </div>
                    </a>
                </li>`;
        messagesList.innerHTML = messagesList.innerHTML + messageElement;
    });
}
renderMessages();