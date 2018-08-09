function Pangram(pangram) {
  this.pangram = pangram;
}

Pangram.prototype.isPangram = function () {
  const letterCount = {};
  pangramString = this.pangram.toLowerCase().replace(/[^a-z]/g,'');

  for(let i = 0; i< pangramString.length; i++) {
    let char = pangramString[i];
    if(letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  }
  return Object.keys(letterCount).length == 26;
}

module.exports = Pangram;
