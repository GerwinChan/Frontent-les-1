function appendMessage(tag, message) {
    var tag = document.createElement(tag);
    var text = document.createTextNode(message);
    tag.appendChild(text);
    document.body.appendChild(tag);
}
