// src/pages/projects/Projects.tsx
import React, { useState, useEffect } from 'react';
import ProjectCard from '../../../components/projects/projectCard';
import './project.css';

interface Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  issuesCount: number;
  avatars: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Simulate fetching project data
    const fetchedProjects: Project[] = [
      {
        id: '1',
        title: 'Project Alpha',
        description: 'Initial project description...',
        dueDate: '10 Oct, 2023',
        issuesCount: 5,
        avatars: ['/avatar1.png', '/avatar2.png'],
      },
      {
        id: '2',
        title: 'Project Beta',
        description: 'Beta project description...',
        dueDate: '15 Oct, 2023',
        issuesCount: 3,
        avatars: ['/avatar3.png', '/avatar4.png'],
      },
      // More projects...
    ];
    setProjects(fetchedProjects);
  }, []);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          dueDate={project.dueDate}
          issuesCount={project.issuesCount}
          avatars={project.avatars}
        />
      ))}

      <div className="pagination">
        <span>Previous</span>
        <span>1</span>
        <span>Next</span>
      </div>
    </div>
  );
};

export default Projects;
