let isHappy = true

let willGetIceCream = new Promise((fulfilled, reject) => {
    if (isHappy) {
        fulfilled("Yes, you will get ice cream")
    } else {
        reject("Nope, no ice cream for you")
    }
})

willGetIceCream
    .then(message => console.log(message))
    .catch(message => console.log(message))

async function checkIceCream() {
    try {
        let message = await willGetIceCream;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}


checkIceCream();


/**
 * Explanation:
Async/Await: This is a feature in JavaScript that allows you to work with Promises in a more synchronous manner, making the code easier to read and understand.

async function checkIceCream() {}: This declares an asynchronous function named checkIceCream. The async keyword allows the use of the await keyword inside the function, which tells JavaScript to wait for a Promise to resolve before moving on.

Try/Catch Block: Within the checkIceCream function, there’s a try/catch block.

try {}: This block will attempt to run the code inside. If there's an error (i.e., if a Promise is rejected), it won't crash the program - instead, it will pass control to the catch block.
catch (error) {}: This block will catch any errors thrown in the try block, preventing them from crashing the program, and allowing you to handle them gracefully, for instance by logging them.
let message = await willIGetIceCream;: This line uses await to wait for the willIGetIceCream Promise to settle (either resolve or reject).

If willIGetIceCream resolves, its resolved value is assigned to message, and the next line of code (console.log(message);) is executed.
If willIGetIceCream rejects, an error is thrown, and control is passed to the catch block.
console.log(message);: If willIGetIceCream is resolved, this line will log the resolved value to the console.

console.log(error);: If willIGetIceCream is rejected, this line will log the rejection value (error) to the console.

checkIceCream();: This line calls the checkIceCream function, initiating the process described above.
 */
