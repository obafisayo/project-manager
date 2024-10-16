import React from 'react';
import ProjectCard from '../../../components/projects/projectCard';
import './project.css';
import PaginatedList from '../../../components/paginatedList/PaginatedList';
import { useCreateData } from '../../../contexts/CreateDataContext';

const Projects: React.FC = () => {
  const { projectData } = useCreateData();

  return (
    <div className="projects-container">
      <PaginatedList
        items={projectData}
        pageSize={6}
        classname={"project"}
        renderItem={(project) => (
          <ProjectCard project={project} key={project.id} />
        )}
      />
    </div>
  );
};

export default Projects;
