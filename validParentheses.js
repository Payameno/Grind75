const isValid = function(s) {
    
  const bracketsObject = {
      
      "(" : ")",
      "[": "]",
      "{": "}",
      
  }
  
  let stack = [];
  
  for (let i=0; i < s.length; i++) {

    if (s[i] in bracketsObject) {
      stack.push(s[i]);
    } else if (s[i] !== bracketsObject[stack.pop()]) {

      return false;

    }

  }

  return stack.length === 0;
  

};