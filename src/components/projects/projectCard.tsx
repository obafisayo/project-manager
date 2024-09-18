// src/components/projects/ProjectCard.tsx
import React from 'react';
import '../../pages/authPage/projects/project.css';

interface ProjectCardProps {
  title: string;
  description: string;
  dueDate: string;
  issuesCount: number;
  avatars: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, dueDate, issuesCount, avatars }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        <span>{dueDate}</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-details">
        <span>{issuesCount} issues</span>
        <div className="avatars">
          {avatars.map((avatar, index) => (
            <img key={index} src={avatar} alt={`Avatar ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
