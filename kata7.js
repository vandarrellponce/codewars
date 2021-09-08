/* Complete the function that takes two integers (a, b, where a < b) 
and return an array of all integers between the input parameters, including them. */

function between(a, b) {
  const arr = []
  for (let i = a; i < b + 1; i++) {
    arr.push(i)
  }

  return arr
}

/* 
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this" */

function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
