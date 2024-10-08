import React from 'react';
import { Card, Avatar, Tag, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, IssuesCloseOutlined, CalendarOutlined } from '@ant-design/icons';
import './projectCard.css';
import { EDIT_PROJECTS, PROJECTS } from '../../routes/RouteConstants';
import { ProjectT } from '../../utils/types';

const { Meta } = Card;

const ProjectCard: React.FC<ProjectT> = ({ id, title, description, dueDate, issuesCount, avatars }) => {
  const formattedDueDate = typeof dueDate === 'string' ? dueDate : dueDate.toLocaleDateString();

  return (
    <Card
      hoverable
      style={{ borderRadius: '10px', width: "300px" }}
      actions={[
        <span><CalendarOutlined /> {formattedDueDate}</span>,
        <span><IssuesCloseOutlined /> {issuesCount} issues</span>,
      ]}
      extra={<Tag color="red">Offtrack</Tag>}
    >
      <Meta
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {title}
            <Link to={`${PROJECTS}/${id}/${EDIT_PROJECTS}`}>
              <EditOutlined />
            </Link>
          </div>
        }
        description={
          <div>
            <p>{description}</p>
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
