import React from 'react';
import './createprojects.css'; // Make sure you have this file for styling

const CreateProjects: React.FC = () => {
  return (
    <div className="create-project-container">
      <h3 className="breadcrumb">Projects / Create Project</h3>

      <div className="create-project-form">
        {/* Project Title and Type */}
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="project-title">Project Title</label>
            <input type="text" id="project-title" placeholder="Enter project title" />
          </div>
          <div className="form-field">
            <label htmlFor="project-type">Project Type</label>
            <input type="text" id="project-type" placeholder="Enter project type" />
          </div>
        </div>

        {/* Start Date and End Date */}
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" />
          </div>
          <div className="form-field">
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" />
          </div>
        </div>

        {/* Project Description */}
        <div className="form-field">
          <label htmlFor="description">Project Description</label>
          <textarea id="description" rows={4} placeholder="Enter project description"></textarea>
        </div>

        {/* Project Roles */}
        <div className="form-field">
          <label htmlFor="project-roles">Project Roles</label>
          <select id="project-roles">
            <option>Team Lead</option>
            <option>Developer</option>
            <option>Designer</option>
          </select>
          {/* Example list of people with roles */}
          <div className="role-list">
            <label>
              <input type="checkbox" />
              Yash <span className="role-label">Team lead</span>
            </label>
            <label>
              <input type="checkbox" />
              Yash <span className="role-label">Team lead</span>
            </label>
            {/* Add more rows as needed */}
          </div>
        </div>

        {/* Create and Delete Buttons */}
        <div className="form-buttons">
          <button className="create-btn">Create</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjects;
