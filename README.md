# Silent Crash in Node.js Server

This repository demonstrates a common but easily missed error in Node.js applications: silent crashes due to unhandled promise rejections within asynchronous operations.  The server appears to start normally but crashes without informative error messages when the asynchronous operation fails.

## Bug Description

The provided code implements a simple Express.js server. An asynchronous function `doSomethingAsync()` simulates an operation that might fail. If it fails, the promise rejects, but the error is only logged to the console, leaving the server to crash silently, instead of gracefully handling the failure.

## Solution

The solution involves proper error handling using the `process.on('unhandledRejection', ...)` event listener. This ensures that unhandled rejections are caught, logged, and handled appropriately, preventing the silent crash.