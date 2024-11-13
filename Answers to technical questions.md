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

```

### 3. How would you track down a performance issue in production? Have you ever had to do this?

####.To track down performance issues in production, I would:

- Monitor Logs: Look at server logs and use performance monitoring tools like Google Chrome DevTools or New Relic to spot slow processes.
- Check Network Requests: Identify slow API calls using the browser’s Network Tab.
- Profile Code: Use a JavaScript profiler to find inefficient code or memory leaks.
- Database Queries: If it's a database issue, optimize slow queries and add proper indexes.
  
Yes, I have had to do this in the past. In one instance, I found that a web app was loading
slowly due to unoptimized database queries. After optimizing the queries, performance improved significantly.
###4. If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time, I would add:

- User Authentication – Allow users to create accounts and manage their own tasks securely.
- Task Categories – Enable users to categorize tasks (e.g., Work, Personal).
- Push Notifications – Remind users of upcoming or overdue tasks.
- Drag-and-Drop Interface – Allow users to reorder tasks visually.
- Mobile Responsiveness – Improve the UI to work better on mobile devices.
- Task Collaboration – Enable multiple users to work on shared tasks.
- Optimized Performance – Implement caching and optimize slow database queries.



### Changes made:
- The answers are more concise and written in simple terms.
- The file addresses both performance tracking and additional features in a clear and direct way.

You can now upload this updated `Answers to technical questions.md` to your GitHub repository, following the same process I mentioned earlier. Let me know if you need further help!

