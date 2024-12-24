const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // Error handling is missing here; This will crash the server silently 
    console.error('Unexpected error:', err);
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate a random error 50% of the time
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});