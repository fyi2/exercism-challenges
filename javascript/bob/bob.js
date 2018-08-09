function Bob() {}

Bob.prototype.hey = function (message) {
  message = message.trim()
  let len = message.length
  if (!message) {
    return 'Fine. Be that way!'
  } else if (message[len - 1] == '?') {
    if (!Number(message[0]) && message == message.toUpperCase()) {
      return "Calm down, I know what I'm doing!"
    }
    return 'Sure.'
  } else if (message == message.toUpperCase() && !onlyNums(message)) {
    return 'Whoa, chill out!'
  } else {
    return 'Whatever.'
  }
}

function onlyNums(str) {
  str = (str.replace(/[\s\,]+/g, ''))
  return Number.isInteger(Number(str))
}

module.exports = Bob
