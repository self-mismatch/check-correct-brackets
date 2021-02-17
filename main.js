const openBrackets = ['(', '{', '['];
const closeBrackets = [')', '}', ']'];

const Bracket = {
	'(': ')',
  '{': '}',
  '[': ']',
};

const isOpenBracket = (bracket) => {
	return openBrackets.find((openBracket) => openBracket === bracket) ? true : false;
};

const isCloseBracket = (bracket) => {
	return closeBrackets.find((closeBracket) => closeBracket === bracket) ? true : false;
};

const checkCorrectBrackets = (string) => {
	let brackets = [];
	let isCorrect = true;
	
  for (let i = 0; i < string.length; i++) {
  	if (isOpenBracket(string[i])) {
    	brackets.push(string[i]);
    } else if (isCloseBracket(string[i])) {
    	const lastOpenBracket = brackets.pop();
      
      if (Bracket[lastOpenBracket] !== string[i]) {
      	isCorrect = false;
        break;
      }
    }
  }
  
  return isCorrect;
};
