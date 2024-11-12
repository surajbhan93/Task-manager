// src/components/TaskItem.js
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const handleToggleCompletion = () => {
    onUpdateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>Priority: {task.priority}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={handleToggleCompletion}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
