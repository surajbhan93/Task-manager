// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => (
  <div>
    {tasks.length === 0 ? (
      <p className="no-tasks">No tasks in this category</p>
    ) : (
      tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))
    )}
  </div>
);

export default TaskList;
