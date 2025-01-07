import React from 'react';
import { Card, Col, Row } from 'antd';
import { TaskT } from '../../utils/types';  // Importing TaskT as per your decision
import { ClockCircleOutlined, PaperClipOutlined, MessageOutlined } from '@ant-design/icons';
import './Kanbanboard.scss';

interface KanbanBoardProps {
  tasks: TaskT[];  // Using TaskT for tasks
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  // Filter tasks by status to categorize them into columns
  const todoTasks = tasks.filter(task => task.status === 'Pending');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const completedTasks = tasks.filter(task => task.status === 'Completed');

  // Reusable function to render a task card
  const renderTaskCard = (task: TaskT) => (
    <Card key={task.id} className="kanban-task-card">
      <div className="task-header">
        <h4 className="">{task.title}</h4>
        <div className="task-details">
          <ClockCircleOutlined /> {typeof task.dueDate === 'string' ? task.dueDate : task.dueDate.toLocaleDateString()} Days
        </div>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <div className="task-icons">
          <PaperClipOutlined /> {task.issuesCount} {/* Attachment count */}
          <MessageOutlined /> {task.issuesCount} {/* Comment count */}
        </div>
        <div className="task-avatars">
          {task.avatars.map((avatar, index) => (
            <img key={index} src={avatar} alt="avatar" className="avatar" />
          ))}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="kanban-board" style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="To Do" bordered={false}>
            {todoTasks.map(task => renderTaskCard(task))}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="In Progress" bordered={false}>
            {inProgressTasks.map(task => renderTaskCard(task))}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Completed" bordered={false}>
            {completedTasks.map(task => renderTaskCard(task))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default KanbanBoard;
