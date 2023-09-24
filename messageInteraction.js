const acceptedMessages = require('./messages.json');

const verifyMessage = (message) => {
    for(messages of acceptedMessages) {
        if(messages.user.idRequired == true) {
            if((message.content).includes(messages.message) && message.author.id == messages.user.id) {
                return messages.reply;
            }
        } else if((message.content).includes(messages.message)) {
            return messages.reply;
        }
    }

    return null;
};

module.exports = verifyMessage;