import React, { ReactNode } from 'react';
import { Card, Tag, Avatar, Row, Col, Typography, Button } from 'antd';
import { ClockCircleOutlined, UnorderedListOutlined, MessageOutlined } from '@ant-design/icons';
import './taskCard.scss'; // Your custom SCSS

// Define the Task type
interface Task {
  creator: ReactNode;
  priority: string;
  status: string;
  id: string;
  title: string;
  description: string;
  dueDate: string;
  issuesCount: number;
  avatars: string[];
}

// Define the props interface for TaskCard
interface TaskCardProps {
  task: Task; // Task object as a prop
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card hoverable className="task-card">
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title level={5}>{task.title}</Typography.Title>
          <Typography.Text>#{task.id} Opened {task.dueDate} by {task.creator}</Typography.Text>
        </Col>
        <Col>
          <Tag color={task.status === 'Completed' ? 'green' : 'red'}>{task.status}</Tag>
          <Tag color={task.priority === 'high' ? 'red' : 'cyan'}>{task.priority}</Tag>
        </Col>
      </Row>

      <Row justify="space-between" align="middle" style={{ marginTop: '10px' }}>
        <Col>
          <Button icon={<ClockCircleOutlined />} type="text">{task.dueDate}</Button>
        </Col>
        <Col>
          <Avatar.Group maxCount={4} size="small">
            {task.avatars.map((avatar, index) => (
              <Avatar key={index} src={avatar} />
            ))}
          </Avatar.Group>
          <Button icon={<UnorderedListOutlined />} type="text" />
          <Button icon={<MessageOutlined />} type="text" />
        </Col>
      </Row>
    </Card>
  );
};

export default TaskCard;
