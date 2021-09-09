/* Write a function which converts the input string to uppercase. */

function makeUpperCase(str) {
  return str.toUpperCase()
}

/* Given a string, write a function that returns the string with 
a question mark ("?") appends to the end, unless the original string 
ends with a question mark, in which case, returns the original string.
"Yes" --> "Yes?" 
"No?" --> "No?" */

function ensureQuestion(s) {
  if (s.includes('?')) return s
  else return `${s}?`
}
