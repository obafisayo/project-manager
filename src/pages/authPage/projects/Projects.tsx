import React, { useState, useEffect } from 'react';
import ProjectCard from '../../../components/projects/projectCard'; // Make sure this path is correct
import './project.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import { CREATE_PROJECTS } from '../../../routes/RouteConstants';
import { Button, Row, Col, Pagination } from 'antd'; // Ant Design imports
import { projectData } from './projectData'; // Importing the project data

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(projectData); // Initially set with imported project data
  const [currentPage, setCurrentPage] = useState(1);

  // You can still use useEffect if you plan to fetch data from an API in the future
  useEffect(() => {
    // Simulate fetching project data
    // In this case, it's already imported, so you may not need this useEffect
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Handle pagination logic if needed
  };

  return (
    <div className="projects-container">
      {/* Create Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>Projects</h2>
        <Link to={CREATE_PROJECTS}>
          <Button type="primary" size="large" style={{ borderRadius: '20px' }}>
            Create
          </Button>
        </Link>
      </div>

      {/* Project List */}
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col key={project.id} xs={24} sm={12} lg={8}>
            <ProjectCard
              title={project.title}
              description={project.description}
              dueDate={project.dueDate}
              issuesCount={project.issuesCount}
              avatars={project.avatars}
            />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Pagination current={currentPage} total={30} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Projects;
