const colors = ['red', 'blue', 'green', 'yellow'];

console.log("============ Question 1 ============")
// Using its index value in colors, console.log 'blue'
console.log(colors[1]);

console.log("============ Question 2 ============")
// add the value 'purple' to the end of the colors array
// console.log the result
colors.push('purple');
console.log(colors);

const benny = {
  name: 'Benny',
  age: 6,
  breeds: ['Terrier', 'Chihauhau', 'Pekingese']
}

console.log("============ Question 3 ============")
// Using dot notation, console.log the name and age of Benny
console.log(benny.name)
console.log(benny.age)
console.log(benny.name, benny.age)
console.log("Benny's name is: ", benny.name)

console.log("============ Question 4 ============")
// Using dot notation, console.log any one of Benny's breeds
console.log(benny.breeds[2])

console.log("============ Question 5 ============")
// Add code to the whisper function so that it takes whatever string is given to it
// and returns an all lower case version

function whisper(word){
  if(typeof(word) === 'string'){
    return word.toLowerCase();
  }
  return false;
}

console.log(`this should print true: ${whisper('Hello') === 'hello'}`)
console.log(`this should print true: ${whisper('BOOGERS') === 'boogers'}`)
console.log(`this should print true: ${whisper(4) === false}`)

// console.log("============ BONUS      ============")

// const dogs = [{
//   name: 'Benny',
//   age: 6,
//   breeds: ['Terrier', 'Chihauhau', 'Pekingese']
// },
// {
//   name: 'Finley',
//   age: 2,
//   breeds: ['Golden Retriever', 'Standard Poodle']
// },
// {
//   name: 'Ruby',
//   age: 4,
//   breeds: ['Unknown Mix']
// }]
// console.log("============ BONUS -- 1 ============")
// // Using index values and dot notation, console.log each dog's name
// console.log(dogs[0].name, dogs[1].name, dogs[2].name)

// console.log("============ BONUS -- 2 ============")
// // Using index values and dot notation, console.log the first breed of each dog
// console.log(dogs[0].breeds[0])
// console.log(dogs[1].breeds[0])
// console.log(dogs[2].breeds[0])

// console.log("============ BONUS -- 3 ============")
// // Using template literals, print the following string
// // Benny is 6 years old
// console.log(dogs[0].name, "is", dogs[0].age, "years old.")
// console.log(`${dogs[0].name} is ${dogs[0].age} years old`)