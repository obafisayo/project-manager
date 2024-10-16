import React from 'react';
import { Card, Tag, Avatar, Row, Col, Typography, Button } from 'antd';
import { ClockCircleOutlined, UnorderedListOutlined, MessageOutlined } from '@ant-design/icons';
import './taskCard.css';
import { TaskT } from '../../utils/types';

interface TaskCardProps {
  task: TaskT;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const formattedDueDate = typeof task.dueDate === 'string' ? task.dueDate : task.dueDate.toLocaleDateString();

  return (
    <Card hoverable className="task-card">
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title level={5}>{task.title}</Typography.Title>
          <Typography.Text>#{task.id} Opened {formattedDueDate} by {task.creator}</Typography.Text>
        </Col>
        <Col>
          <Tag color={task.status === 'Completed' ? 'green' : 'red'}>{task.status}</Tag>
          <Tag color={task.priority === 'high' ? 'red' : 'cyan'}>{task.priority}</Tag>
        </Col>
      </Row>

      <Row justify="space-between" align="middle" style={{ marginTop: '10px' }}>
        <Col>
          <Button icon={<ClockCircleOutlined />} type="text">{formattedDueDate}</Button>
        </Col>
        <Col>
          <Avatar.Group size="small">
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
