const isPalindrome = function(s) {

  const lowerCaseString = s.toLowerCase();

  if (s.length === 0) {
    return true;
  }

  const trimmed = lowerCaseString.replace(/[^a-zA-Z0-9]/g, "");
  //regexp matches a character that is not a-z, A-Z, 0-9

  const stringreversed = trimmed.split("").reverse().join("");

  if (stringreversed === trimmed) {
    return true;
  } else {
    return false;
  }

};
