import React, { useState, useEffect } from 'react';
import ProjectCard from '../../../components/projects/projectCard'; // Ensure path is correct
import './project.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import { CREATE_PROJECTS } from '../../../routes/RouteConstants';
import { Button, Row, Col, Pagination } from 'antd'; // Ant Design imports
import { projectData } from '../../../data/projectData'; // Importing the project data

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(projectData); // Initially set with imported project data
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const pageSize = 9; // Projects per page

  // Calculate paginated projects based on the current page and pageSize
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProjects = projects.slice(startIndex, endIndex);

  useEffect(() => {
    // Simulate fetching project data if needed
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page
  };

  return (
    <div className="projects-container">
      {/* Create Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }} className="projects-header">
        <h2>Projects</h2>
        <Link to={CREATE_PROJECTS}>
          <Button type="primary" size="large" className="create-button">
            Create
          </Button>
        </Link>
      </div>

      {/* Project List */}
      <Row gutter={[16, 16]}>
        {paginatedProjects.map((project) => (
          <Col key={project.id} xs={24} sm={12} lg={8}>
            <ProjectCard
              id={project.id}  /* Ensure to pass the project id */
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
      <div className="pagination-container" style={{ marginTop: '1.5rem' }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={projects.length}
          onChange={handlePageChange}
          showSizeChanger={false} // Disabling option to change page size
        />
      </div>
    </div>
  );
};

export default Projects;
