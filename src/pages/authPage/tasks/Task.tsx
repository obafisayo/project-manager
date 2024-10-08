// Task.tsx
import React from 'react';
import TaskCard from '../../../components/tasks/taskCard';
import { tasks } from '../../../data/taskData';
import PaginatedList from '../../../components/paginatedList/PaginatedList';
import './task.css';

const Task: React.FC = () => {
  const pageSize = 4;

  return (
    <div className="task-page">
      <PaginatedList
        items={tasks}
        pageSize={pageSize}
        renderItem={(task) => <TaskCard key={task.id} task={task} />}
      />
    </div>
  );
};

export default Task;
