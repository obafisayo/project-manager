import React, { useState } from 'react';
import TaskCard from '../../../components/tasks/taskCard';
import { tasks } from '../../../data/taskData';
import PaginatedList from '../../../components/paginatedList/PaginatedList';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined, CalendarOutlined } from '@ant-design/icons';
import KanbanBoard from '../../../components/kanbanBoard/Kanbanboard';
import './task.css';

const Task: React.FC = () => {
  const pageSize = 4;

  // State to track the current view (List or Kanban)
  const [viewMode, setViewMode] = useState<'List' | 'Kanban'>('List');

  // Dropdown menu options for switching views
  const menu = (
    <Menu onClick={(e) => setViewMode(e.key === '1' ? 'Kanban' : 'List')}>
      <Menu.Item key="1">Kanban View</Menu.Item>
      <Menu.Item key="2">List View</Menu.Item>
    </Menu>
  );

  return (
    <div className="task-page" style={{ padding: '20px', background: '#f4f6f8', borderRadius: '8px' }}>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Tasks</h2>
        {/* Dropdown for switching between views */}
        <Dropdown overlay={menu} trigger={['click']}>
          <Button icon={<CalendarOutlined />}>
            {viewMode === 'Kanban' ? 'List View' : 'Kanban View'} <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      {/* Conditionally render List or Kanban view */}
      {viewMode === 'List' ? (
        <PaginatedList
          items={tasks}
          pageSize={pageSize}
          renderItem={(task) => <TaskCard key={task.id} task={task} />}
        />
      ) : (
        <KanbanBoard tasks={tasks} />
      )}
    </div>
  );
};

export default Task;
