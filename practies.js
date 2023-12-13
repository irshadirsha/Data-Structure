const fruits = ["Banana", "Orange", "Apple", "Mango"];

const a=fruits.splice(1,3)
console.log(a);
console.log(fruits);

const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const success = true;
      
      if (success) {
        resolve('Operation completed successfully!');
      } else {
        reject('Operation failed!');
      }
    }, 1000);
  });
 
  myPromise
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  