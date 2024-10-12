import React, { useState } from 'react';
import ProjectCard from '../../../components/projects/projectCard';
import './project.css';
import { Link } from 'react-router-dom';
import { CREATE_PROJECTS } from '../../../routes/RouteConstants';
import { Button } from 'antd';
import { projectData } from '../../../data/projectData';
import PaginatedList from '../../../components/paginatedList/PaginatedList';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(projectData);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <span></span>
        <Link to={CREATE_PROJECTS}>
          <Button type="primary" size="large" className="create-button">
            Create
          </Button>
        </Link>
      </div>
      <PaginatedList
        items={projects}
        pageSize={6}
        renderItem={(project) => (
          <ProjectCard
            id={project.id}
            title={project.title}
            description={project.description}
            dueDate={project.dueDate}
            issuesCount={project.issuesCount}
            avatars={project.avatars}
          />
        )}
      />
    </div>
  );
};

export default Projects;
