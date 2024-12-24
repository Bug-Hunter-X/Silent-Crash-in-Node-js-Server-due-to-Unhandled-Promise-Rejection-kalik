const express = require('express');
const app = express();

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform any necessary cleanup or error handling
  // ... (e.g., send error response to client)
});

app.get('/', (req, res) => {
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error in doSomethingAsync:', err);
    res.status(500).send('Internal Server Error'); //Send a proper error response
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
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