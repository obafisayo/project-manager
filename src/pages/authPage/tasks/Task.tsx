import React from 'react';
import TaskCard from '../../../components/tasks/taskCard';
import { tasks } from '../../../data/taskData';
import PaginatedList from '../../../components/paginatedList/PaginatedList';
import './task.css';

const Task: React.FC = () => {
  const pageSize = 6; // Keep pagination the same

  return (
    <div className="task-page" style={{ padding: ' 10px', background: '#f4f6f8', borderRadius: '20px' }}>
      {/* Render paginated task cards */}
      <PaginatedList
        items={tasks}
        pageSize={pageSize}
        classname={"task"}
        renderItem={(task) => <TaskCard key={task.id} task={task} />}
      />
    </div>
  );
};

export default Task;
