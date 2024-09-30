import React, { useState } from 'react';
import TaskCard from '../../../components/tasks/taskCard'; // Path to your TaskCard component
import { tasks } from '../../../data/taskData'; // Import task data from taskData.ts
import { Pagination } from 'antd'; // Import Pagination component from Ant Design
import './task.scss'; // Custom styles for Task page

const Task: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const pageSize = 10; // Number of tasks per page

  // Calculate the tasks to display based on the current page and pageSize
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTasks = tasks.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="task-page">
      {paginatedTasks.length > 0 ? (
        paginatedTasks.map((task) => (
          <TaskCard key={task.id} task={task} /> // Passing the task object to TaskCard
        ))
      ) : (
        <p>No tasks available</p> // Fallback for when there are no tasks
      )}

      {/* Add Pagination Component */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={tasks.length}
        onChange={handlePageChange}
        showSizeChanger={false} // Disable option to change page size
      />
    </div>
  );
};

export default Task;
