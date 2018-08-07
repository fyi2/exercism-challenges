module.exports = function reverseString(word) {
  return word == '' ? '' : word.split('').reverse().join('')
}
