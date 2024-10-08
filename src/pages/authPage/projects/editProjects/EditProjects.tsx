import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment'; // Make sure moment is installed
import { projectData } from '../../../../data/projectData'; // Ensure correct import path
import './editprojects.css'; // Ensure the CSS file exists
import { ProjectT, TaskT } from '../../../../utils/types';

const { TextArea } = Input;

type Props = {
  data: ProjectT | TaskT | null
}

const EditProject: React.FC<Props> = ({ data }) => {
  const { id } = useParams<{ id: string }>(); // Get project ID from the URL
  const [projectDataState, setProjectDataState] = useState<any>(null); // State to store project data

  useEffect(() => {
    // Filter the project from the data based on the ID from the URL
    const project = projectData.find((project) => project.id === id);
    if (project) {
      // Use dueDate as there's no startDate or endDate
      setProjectDataState({
        ...project,
        dueDate: moment(project.dueDate, 'YYYY-MM-DD'), // Convert dueDate to moment object
      });
    }
  }, [id]);

  const handleSave = () => {
    const updatedProject = {
      ...projectDataState,
      // Format dueDate back to string format if needed when saving
      dueDate: projectDataState.dueDate ? projectDataState.dueDate.format('YYYY-MM-DD') : null,
    };
    // Handle save or update logic here (e.g., make an API call)
    console.log('Project updated:', updatedProject);
  };

  return (
    <div className="edit-project-container">
      {projectDataState ? (
        <Form layout="vertical" className="edit-project-form">
          <Form.Item label="Project Title">
            <Input
              value={projectDataState.title}
              onChange={(e) => setProjectDataState({ ...projectDataState, title: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Project Description">
            <TextArea
              rows={4}
              value={projectDataState.description}
              onChange={(e) => setProjectDataState({ ...projectDataState, description: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Due Date">
            <DatePicker
              value={projectDataState.dueDate ? moment(projectDataState.dueDate, 'YYYY-MM-DD') : undefined}
              onChange={(date) => setProjectDataState({ ...projectDataState, dueDate: date })}
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item label="Issues Count">
            <Input
              value={projectDataState.issuesCount}
              onChange={(e) => setProjectDataState({ ...projectDataState, issuesCount: parseInt(e.target.value, 10) })}
            />
          </Form.Item>
          <Button type="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Form>
      ) : (
        <p>Loading project data...</p>
      )}
    </div>
  );
};

export default EditProject;
