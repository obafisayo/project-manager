import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import moment from 'moment';
import './editprojects.css';
import { ProjectT } from '../../../../utils/types';
import { useCreateData } from '../../../../contexts/CreateDataContext';
import { PROJECTS } from '../../../../routes/RouteConstants';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

type Props = {
  data: ProjectT | null;
};

const EditProject: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const [projectDataState, setProjectDataState] = useState<ProjectT | null>(data);
  const [originalData, setOriginalData] = useState<ProjectT | null>(data);
  const { setProjectData } = useCreateData();

  useEffect(() => {
    if (data) {
      setProjectDataState({
        ...data,
        dueDate: moment(data.dueDate),
      });
      setOriginalData(data);
    }
  }, [data]);

  const handleSave = () => {
    if (!projectDataState || !projectDataState.title || !projectDataState.description || (projectDataState.issuesCount < 0)) {
      message.error('Please fill in all fields correctly.');
      return;
    } 

    const updatedProject: ProjectT = {
      ...projectDataState,
      dueDate: projectDataState.dueDate && projectDataState.dueDate
    };

    setProjectData((prevData) => 
      prevData.map((project) => 
        project.id === updatedProject.id ? updatedProject : project
      )
    );

    message.success('Project updated successfully!');
    navigate(PROJECTS);
  };
  
  const handleCancel = () => {
    setProjectDataState(originalData);
    navigate(PROJECTS);
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
              value={projectDataState.dueDate}
              onChange={(date) => setProjectDataState({ ...projectDataState, dueDate: date })}
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item label="Issues Count">
            <Input
              type="number"
              value={projectDataState.issuesCount}
              onChange={(e) => setProjectDataState({ ...projectDataState, issuesCount: parseInt(e.target.value, 10) })}
            />
          </Form.Item>
          <Button type="primary" onClick={handleSave}>
            Save Changes
          </Button>
          <Button type="default" onClick={handleCancel} style={{ marginLeft: '10px' }}>
            Cancel
          </Button>
        </Form>
      ) : (
        <p>Loading project data...</p>
      )}
    </div>
  );
};

export default EditProject;
