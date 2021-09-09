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

/* You have to create a function calcType, which receives 3 arguments: 2 numbers, and the 
result of an unknown operation performed on them (also a number).Based on those 3 values 
you have to return a string, that describes which operation was used to get the given result.
The possible return strings are: "addition", "subtraction", "multiplication", "division". */

function calcType(a, b, res) {
  switch (res) {
    case a + b:
      return 'addition'
    case a - b:
      return 'subtraction'
    case a * b:
      return 'multiplication'
    case a / b:
      return 'division'
  }
}

/* In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
Example:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

function highAndLow(numbers) {
  let high = Number.NEGATIVE_INFINITY
  let low = Number.POSITIVE_INFINITY

  numbers.split(' ').forEach((num) => {
    if (Number(num) > high) high = num
    if (Number(num) < low) low = num
  })

  return `${high} ${low}`
}

function highAndLow2(numbers) {
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
