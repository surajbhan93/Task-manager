// src/components/Dashboard.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import './Dashboard.css';

const Dashboard = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const currentDate = new Date();

  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) => (priorityFilter ? task.priority === priorityFilter : true))
    .filter((task) => (showCompleted ? task.completed : !task.completed));

  const upcomingTasks = filteredTasks.filter(
    (task) => new Date(task.dueDate) > currentDate && !task.completed
  );
  const overdueTasks = filteredTasks.filter(
    (task) => new Date(task.dueDate) <= currentDate && !task.completed
  );
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <header className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Task Manager</h1>
          <img src="/public/list.png" alt="Task Manager Logo" className="w-20 h-20" />
        </header>

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e.target.checked)}
              className="focus:ring-2 focus:ring-blue-500"
            />
            Show Completed
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Upcoming Tasks</h2>
            <TaskList tasks={upcomingTasks} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Overdue Tasks</h2>
            <TaskList tasks={overdueTasks} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Completed Tasks</h2>
            <TaskList tasks={completedTasks} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
