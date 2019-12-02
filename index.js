const Stack = require('./Stack');

function main(){
  let starTrek = new Stack;

  starTrek.push(`Kirk`);
  starTrek.push(`Spock`);
  starTrek.push(`McCoy`);
  starTrek.push(`Scotty`);

  console.log(`Stack after adding 4 items:`, starTrek.display());

  console.log(`Peeking into stack: `, starTrek.peek());

  starTrek.pop();
  console.log(`Stack after removing ${starTrek.pop()}`, starTrek.display());
  
}
main();

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here

    let stringStack = new Stack;
    for(let i = 0; i < s.length; i++){
      stringStack.push(s[i]);
    }
    for(let i = 0; i < s.length; i++){
      if(s[i] !== stringStack.pop())
        return false;
    }    
    return true;
}

// True, true, true, false
console.log(`\n\nChecking Palindromes: `);
console.log(`dad`, is_palindrome("dad"));
console.log(`A man, a plan, a canal: Panama`, is_palindrome("A man, a plan, a canal: Panama"));
console.log(`1001`, is_palindrome("1001"));
console.log(`Tauhida`, is_palindrome("Tauhida"));


function matchingParantheses(str){
  let opParStack = new Stack;

  // all the possible parantheses
  const openingParanthese = [
    '(', '[', '{'
  ]

  const closingParanthese = [
    ')', ']', '}'
  ]
  
  // creating the stack with the parantheses
  for(let i = 0; i < str.length; i++){
    if(openingParanthese.includes(str[i])){
      opParStack.push(str[i]);
    }
    if(closingParanthese.includes(str[i])){
      if(!opParStack.top){
        switch(str[i]){
          case ')':
            throw new Error(`Missing '(' parantheses`);
            break;
          case '}':
            throw new Error(`Missing '{' parantheses`);
            break;
          case ']':
            throw new Error(`Missing '[' parantheses`);
            break;
        }
      }

      let opPar = opParStack.pop();
      let expected = '';
      switch(opPar){
        case '(':
            expected = ')';
            break;
          case '{':
            expected = '}'
            break;
          case '[':
            expected = ']';
            break;
      }
      if(expected !== str[i]){
        switch(opPar){
          case '(':
            throw new Error(`Expected ')' and got ${str[i]}`);
            break;
          case '{':
            throw new Error(`Expected '}' and got ${str[i]}`);
            break;
          case '[':
            throw new Error(`Expected ']' and got ${str[i]}`);
            break;
        }
      }
    }
  }

  return `Valid expression`;
}

console.log(`(()): `, matchingParantheses(`({}())`));