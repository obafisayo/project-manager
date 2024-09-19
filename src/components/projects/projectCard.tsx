import React from 'react';
import { Card, Avatar, Tag, Tooltip } from 'antd';
import { EditOutlined, IssuesCloseOutlined, CalendarOutlined } from '@ant-design/icons'; // Ant Design Icons
import './projectCard.css'; // Your custom CSS if needed

interface ProjectCardProps {
  title: string;
  description: string;
  dueDate: string;
  issuesCount: number;
  avatars: string[];
}

const { Meta } = Card;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, dueDate, issuesCount, avatars }) => {
  return (
    <Card
      hoverable
      style={{ borderRadius: '10px' }} // Apply styling directly or via CSS
      actions={[
        <span><CalendarOutlined /> {dueDate}</span>, // Display project due date
        <span><IssuesCloseOutlined /> {issuesCount} issues</span>, // Display issues count
      ]}
      extra={<Tag color="red">Offtrack</Tag>} // You can change this dynamically
    >
      <Meta
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {title} <EditOutlined />
          </div>
        }
        description={
          <div>
            <p>{description}</p>
            {/* Avatar Group */}
            <Avatar.Group maxCount={4} size="small" maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              {avatars.map((avatar, index) => (
                <Tooltip title={`Team Member ${index + 1}`} key={index}>
                  <Avatar src={avatar} />
                </Tooltip>
              ))}
            </Avatar.Group>
          </div>
        }
      />
    </Card>
  );
};

export default ProjectCard;
