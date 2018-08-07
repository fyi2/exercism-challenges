const DnaTranscriber = function() {
}

DnaTranscriber.prototype.toRna = function(doubleHelix)  {
  const transcriber = {'G': 'C', 'C':'G', 'T':'A','A':'U'};
  const legalNucleotides = 'GCTA';
  let returnValue = '' ;

  if(doubleHelix.includes('X')) {
    throw new Error('Invalid input');
  }

  for(let i=0;i<doubleHelix.length;i++) {
    returnValue += transcriber[doubleHelix[i]] ;
  }
  return returnValue ;
}

module.exports = DnaTranscriber
