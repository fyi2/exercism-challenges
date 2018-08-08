function keyMapper() {
    const obj = {}
    let charStart = 97
    for (let i = 0; i < 26; i++) {
        obj[String.fromCharCode(charStart + i)] = i
    }
    return obj
}

const keyMap = keyMapper()

function Cipher(key) {
    if (!arguments.length) {
        key = randomKey()
    }

    if (key == '' || Number(key) || key.match(/[A-Z]+/) != null) {
        throw new Error('Bad key')
    }

    this.key = key
}

function randomKey() {
    let keyString = ''
    for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        keyString += String.fromCharCode(random)
    }
    return keyString;
}

Cipher.prototype.encode = function (message) {
    let encodedMessage = ''
    for (let i = 0; i < message.length; i++) {
        let j = i % this.key.length
        let messageChar = message[i]
        let keyChar = this.key[j]
        let rotateNum = keyMap[keyChar]
        encodedMessage += transform(messageChar, rotateNum)
    }
    return encodedMessage
}

Cipher.prototype.decode = function(encodedMessage) {
    let decodedMessage = ''
    for (let i = 0; i < encodedMessage.length; i++) {
        let messageChar = encodedMessage[i]
        let j = i % this.key.length
        let keyChar = this.key[j]
        let rotateNum = keyMap[keyChar]
        decodedMessage += transform(messageChar, -rotateNum)
    }
   return decodedMessage 
}

function transform(messageChar, rotateNum) {
    let messageNum = messageChar.charCodeAt(0)
    let finalRotation = rotateNum + messageNum
    if (finalRotation > 122) {
        let newRotate = finalRotation % 122
        return String.fromCharCode(newRotate + 96)
    }
    if (finalRotation < 97) {
        let newRotate = finalRotation - 97
        return String.fromCharCode(123 + newRotate)
    }

    return String.fromCharCode(finalRotation)
}

module.exports = Cipher