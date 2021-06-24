export function whisper(word){
    if(typeof(word) === 'string'){
      return word.toLowerCase();
    }
    return false;
  }