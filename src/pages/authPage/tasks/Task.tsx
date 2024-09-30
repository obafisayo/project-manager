import React from 'react';
import TaskCard from '../../../components/tasks/taskCard'; // Path to your TaskCard component
import { tasks } from '../../../data/taskData'; // Import task data from taskData.ts
import './task.scss'; // Custom styles for Task page

const Task: React.FC = () => {
  return (
    <div className="task-page">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} /> // Passing the task object to TaskCard
        ))
      ) : (
        <p>No tasks available</p> // Fallback for when there are no tasks
      )}
    </div>
  );
};

export default Task;
