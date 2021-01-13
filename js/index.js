// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = `Gregory`
let hacker2 = `Chuck`

console.log(`The driver's name is ${hacker1}`)

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name. It has ${hacker1.length} characters!`)
    } else {
      console.log(`Wow, you both have equally long names ${hacker1.length} characters!`)
    }


// Iteration 3: Loops

hacker1Upper = hacker1.toUpperCase()

hacker1Space = ''

 for (i = 0; i <= hacker1Upper.length; i++) {
  x = hacker1Upper.substr(i, 1);
  hacker1Space = hacker1Space.concat(x, ` `);
}
console.log(hacker1Space)  

hacker2Reverse = ''

for (i=hacker2.length-1; i>=0; i--){
 x = hacker2.substr(i, 1)
 hacker2Reverse = hacker2Reverse.concat(x)
}
console.log(hacker2Reverse)