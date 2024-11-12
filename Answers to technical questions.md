# Answers to Technical Questions

### 1. **How long did you spend on the coding test?**
I spent approximately ** 2.5 hours** working on the coding test. This includes the time spent on setting up the project, implementing the core features, testing the application, and documenting the process in the `README.md` file.

### 2. **What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

The most useful feature I found in the latest version of **JavaScript (ES6/ESNext)** is **async/await** for handling asynchronous operations in a more readable and maintainable way. Previously, callback functions and promises were used, but the `async/await` syntax simplifies this by allowing asynchronous code to be written in a synchronous style.

Here's a code snippet that demonstrates the use of `async/await` to fetch data from an API:

```js
// Example: Fetching tasks from an API asynchronously
const fetchTasks = async () => {
  try {
    const response = await fetch('https://api.example.com/tasks');
    const tasks = await response.json();
    console.log(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

fetchTasks();


