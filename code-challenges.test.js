// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

/*
I need a describe statement, going to name it career. I am going to move the variable inside the describe function. Then for the it statement plug in part of the prompt as it explains what needs to be done. Then test it and hopefully get a reference error. 
*/

describe("career", () => {

  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ] 

  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(career(careers)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

/*
I am going to need to get inside the array and inside the objects to get to the key value pairs inside and be able to modify the names, make the first letters of the names upper cased. I am also going to need string interpolation to make a career story about each person. I will have to plug into the string interpolation the name and occupation. 
*/
 

// I mapped over the array and targeted the object keys name and occupation. Then used charAt to target the first index (0) and upper case that letter. then I sliced the rest back in.

const careers = people.map(o => `${o.name.charAt(0).toUpperCase() + o.name.slice(1)} is a ${o.occupation}`);

// console.log(career);




/*
[
  'Ford prefect is a a hitchhiker',
  'Zaphod beeblebrox is a president of the galaxy',
  'Arthur dent is a a radio employee'
]

best I could get^^

*/

// const names = people.map((value) => value.name.split(' '))

// for (let i = 0; i < value.length; i++) {
//     value[i] = value[i][0].toUpperCase() + value[i].substr(1);
// }

// names.join(" "); 

// console.log(names);


/*
I cannot get the second name to get capitalized at the first letter. I tried with a for loop but I was not able to just pinpoint the values to then put it into the for loop. I did this to get the values out of the array with objects in it: const names = people.map((value) => value.name). But After this I was stuck. But this did give me an array with the names. 
[ 'ford prefect', 'zaphod beeblebrox', 'arthur dent' ] But I could not get this way to work without a bunch of errors. 
*/







// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

/*
Need a describe function. I will name it hodges. For it statement I'll put a string of the prompt. I will need 2 expect statements for each variable.  
*/


describe("hodges", () => {

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(hodges(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(hodges(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//reference error (good error)


// b) Create the function that makes the test pass.

/*
So for the function I will need to first ONLY get the numbers. I will need to get rid of anything that isn't a number. then I could map over the numbers % 3 and that should be it. 
*/

const hodges = (array) => {
  
  return array.filter(Number.isInteger).map(x => x % 3)
}

/* 
Used Number with .isInterger so it wouldn't catch the booleans. First I filtered through the array to just get numbers then I mapped over the new array with the modulo 3 to get the remainder values. 
*/


// console.log(hodges(hodgepodge1));

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

/* 
The usual describe function (cubert) with it statement with part of question in the string of it. Hopefuly we get to the correct reference error
*/

describe("cubert", () => {

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
  expect(cubert(cubeAndSum1)).toEqual(99)
  expect(cubert(cubeAndSum2)).toEqual(1125)
})
})


// b) Create the function that makes the test pass.

/*
Going to make a function that takes in the array as a parameter then maps over the array with **3. ** is the way to add an exponent to a number. THEN add them all up after being cubed.
*/

const cubert = (array) => {
  return array.map(x => x ** 3).reduce((a,b)=>a+b)
   }

   

// console.log(cubert(cubeAndSum1));

/*
This took me wayyy too long but thats what happens when you have the tv on, baby going crazy, and deciding on what to DoorDash. Talk about stress. Once I had alone time I found a method immediately. the .reduce((a,b)=>a+b). reduce iterates through the array. adding the values up, kinda reminds me when we did the fibonacci sequence problem. 
*/