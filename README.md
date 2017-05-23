# ES6 Practice
This is the exercise for the first day of Jordan's React Native bootcamp.

The goal of this exercise is to help you become familiar with the syntax and
language features commonly used with modern JavaScript and React.

## Instructions
Inside [`server.js`](./server.js), there's a route that returns a random length
array populated with random numbers. Your goal is to write a class that can
fetch and do some operations on these arrays.

### Starting the server
 - Install dependencies with `npm install` (or `yarn` if you're into that)
 - Run the server with `npm start` (`yarn start`)

### Exercise
Write an ES6 class that does the following:
  - [ ] When created, has properties inluding: `{ isFetching: false, array: null }`
  - [ ] Has a method called `fetchArray()` that fetches an array from the server
    - Import and use the `getArray()` function from [`src/api.js`](./src/api.js)
    - Make sure to update `isFetching` accordingly
  - [ ] Has a method called `getStats()` that returns an object with the following information: `max`, `min`, `sum`, `length`
    - [ ] Modify your `getStats()` method to use a single `reduce()` function
  - [ ] Has a method called `toStrings()` that returns an array of the strigified numbers in the array
  - [ ] Has a method called `toNegative()` that returns an array of the numbers changed to negatives
  - [ ] Has a method called `getAbove(x)` which returns the numbers above `x`
  - [ ] Has a method called `getAboveAverage()` that returns the numbers above the average
  - [ ] Has a static method that determines if a variable is an instance of your class
  - [ ] Has a static method called `merge()` that takes two instances of your class and merges them using the spread operator

If you finish early (or you feel like a challenge), check out the sections below
for a deeper dive into this problem.

### Testing
Testing is not covered in this bootcamp, but I highly encourage you to look into
the various options for testing. There are many great options, and in this exercise
you get to implement your own. Inside [`src/api.js`](./src/api.js) is another function
that you may find helpful (tl;dr it's a deterministic `getArray()`). Use this to
complete these tasks:
  - [ ] Export your class and import it into a new file called `test.js`
  - [ ] Write your own `assert(value, message)` function that errors with `message` if `value` is not truthy
  - [ ] Test your class using your `assert()` function

### Challenge
If you finish early, run the server in challenge mode with `npm run challenge`.
This will cause the server to randomly return HTTP error codes, and in the rare
case (5%), never respond at all. 

Add a new class that inherits from your existing class that can handle these
errors (in any way you see fit), and add a timeout to your response.
