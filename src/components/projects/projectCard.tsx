import React from 'react';
import { Card, Avatar, Tag, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined, IssuesCloseOutlined, CalendarOutlined } from '@ant-design/icons';
import './projectCard.css';
import { EDIT_PROJECTS, PROJECTS } from '../../routes/RouteConstants';
import { ProjectT } from '../../utils/types';

const { Meta } = Card;

interface ProjectCardProps {
  project: ProjectT;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div key={project.id}>
      <Card
        hoverable
        style={{ borderRadius: '10px', width: "100%" }}
        actions={[
          <span><CalendarOutlined /> {project.dueDate.format('YYYY-MM-DD')}</span>,
          <span><IssuesCloseOutlined /> {project.issuesCount} issues</span>,
        ]}
        extra={<Tag color="red">Offtrack</Tag>}
      >
        <Meta
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {project.title}
              <Link to={`${PROJECTS}/${project.id}/${EDIT_PROJECTS}`}>
                <EditOutlined />
              </Link>
            </div>
          }
          description={
            <div>
              <p className='truncate'>{project.description}</p>
              <Avatar.Group size="small">
                {project.avatars?.map((avatar, index) => (
                  <Tooltip title={`Team Member ${index + 1}`} key={index}>
                    <Avatar src={avatar} />
                  </Tooltip>
                ))}
              </Avatar.Group>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default ProjectCard;
