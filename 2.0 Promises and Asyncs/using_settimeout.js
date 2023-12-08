/**
 * In this example, myPromise is rejected after a 1-second timeout, and the rejection is handled by the second function provided to .then().
 */

const myPromise = new Promise((resolve, reject) => {
    // Using setTimeout to simulate an asynchronous operation
    //after a 1 second delay, the execution is carried out synchronously
    setTimeout(() => {
        reject('Something went wrong!'); 
        resolve("resolve value"); //gets ignored since it is called second
    }, 1000);
    //resolve("resolve value as returned from resolve()") //called after 1 second delay
  });
  
  myPromise.then(
    (value) => console.log('Promise was resolved: ', value),
    error => console.log('Promise was rejected with:', error)
  );

  //the .then() block takes at most 2 function arguments and can be used in place of the .catch() to handle unfulfilled promises like so 
  /**
   * .then(onFulfilled, onRejected)
   * 
   */