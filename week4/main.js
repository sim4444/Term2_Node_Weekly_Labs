//promises concept

// new Promise
const promise = new Promise(()=>{}) //this makes a promise object...right now due to no call back function inside, STATE of this promise is pending and value is undefined

// example of promise

//example 1
const promiseA = new Promise((resolve, reject) => {
  if (2 < 4) {
    resolve("It is True!");
  } else {
    reject(new Error(`${err}:failed`));
  }
});
promiseA.then((value) => console.log(value));
promiseA.catch((err) => console.log(err));

//example 2
const promiseB = new Promise((resolve, reject) => {
  if (200 < 4) {
    resolve("It is True!");
  } else {
    reject(new Error("failed"));
  }
});
promiseB.then((value) => console.log(value));
promiseB.catch((err) => console.log(err));

//example 3
const isSunny = true;
const promise1 = new Promise((resolve, reject) => {
  if (isSunny) {
    resolve("It is sunny");
  } else {
    reject("It is not sunny");
  }
});
promise1.then((value) => console.log(value));
promise1.catch((error) => console.log(error));

//example 4
const isRaining = false;
const promise2 = new Promise((resolve, reject) => {
  if (isRaining) {
    resolve("It is sunny");
  } else {
    reject("It is not sunny");
  }
});
promise2.then((value) => console.log(value));
promise2.catch((error) => console.log(error));

//example 5

// now we need to create own function that returns a new promise object
function get_content(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  get_content("file1.txt")
  .then((value) => console.log(value.toString()))
  .catch((err) => console.log(err));
  //or another way of writing above 3 lines is:
  // const p = get_content("file1.txt");
  // p.then((value) => console.log(value.tostring()));
  // p.catch((err) => console.log(err));
  
  



