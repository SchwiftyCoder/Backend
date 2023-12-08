Promise.resolve(1)
    .then(value => {
        console.log(value);  // 1
        return value + 1;
    })
    .then(value => {
        console.log(value);  // 2
    });


/**
 * In JavaScript, Promise.resolve() is a static method on the Promise object that returns a Promise that is resolved with the given value. It's a shorthand for creating a promise that immediately resolves to a particular value. You might use this method when you want to start a chain of .then() method calls on a value.
 * 
 * Promise.resolve(1): This line creates a new promise that is immediately resolved with the value 1.

.then(value => { console.log(value); return value + 1; }): This .then() method registers a callback to be called when the promise is resolved.

When this promise is resolved (which it is, immediately, with the value 1), the provided function is called with the resolved value 1.
Inside the callback, 1 is logged to the console, and 1 + 1 (which is 2) is returned. When you return a value inside a .then() callback, the promise returned by .then() resolves with that returned value.
.then(value => { console.log(value); }): This .then() method is called on the promise returned by the previous .then() method.

Since the previous .then() callback returned 2, this .then() method's callback is called with the value 2.
2 is logged to the console.
In essence:

Promise.resolve(1) creates a promise resolved with 1.
The first .then() logs 1 and returns 2.
The second .then() logs 2
 */