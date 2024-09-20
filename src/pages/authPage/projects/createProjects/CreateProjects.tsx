import React from 'react';
import { Form, Input, DatePicker, Select, Checkbox, Button, Row, Col } from 'antd';
import './createprojects.css'; // Import the compiled CSS file

const { TextArea } = Input;
const { Option } = Select;

const CreateProjects: React.FC = () => {
  const [form] = Form.useForm();

  const handleCreate = () => {
    form.validateFields().then((values) => {
      console.log('Form Values:', values);
      // Handle form submission (e.g., send data to API)
    }).catch((errorInfo) => {
      console.log('Validation Failed:', errorInfo);
    });
  };

  return (
    <div className="create-project-container">
      <h3 className="breadcrumb">Projects / Create Project</h3>

      <Form form={form} layout="vertical" className="create-project-form">
        {/* Four Columns in One Row */}
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="projectTitle"
              label="Project Title"
              rules={[{ required: true, message: 'Please enter the project title' }]}
            >
              <Input placeholder="Enter project title" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="projectType"
              label="Project Type"
              rules={[{ required: true, message: 'Please enter the project type' }]}
            >
              <Input placeholder="Enter project type" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true, message: 'Please select the start date' }]}
            >
              <DatePicker style={{ width: '100%' }} placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true, message: 'Please select the end date' }]}
            >
              <DatePicker style={{ width: '100%' }} placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>
        </Row>

        {/* Project Description */}
        <Form.Item
          name="description"
          label="Project Description"
          rules={[{ required: true, message: 'Please enter the project description' }]}
        >
          <TextArea rows={4} placeholder="Enter project description" />
        </Form.Item>

        {/* Project Roles - Wrapped in a Box */}
        <div className="roles-box">
          <h4>Project Roles</h4>
          <Form.Item
            name="projectRoles"
            rules={[{ required: true, message: 'Please select the project role' }]}
          >
            <Select placeholder="Select project role" defaultValue="Team Lead">
              <Option value="teamLead">Team Lead</Option>
              <Option value="developer">Developer</Option>
              <Option value="designer">Designer</Option>
            </Select>
          </Form.Item>

          <div className="role-list">
            <Checkbox.Group>
              <Row gutter={16}>
                <Col>
                  <Checkbox value="Yash_TeamLead">Yash <span className="role-label">Team Lead</span></Checkbox>
                </Col>
                <Col>
                  <Checkbox value="John_Developer">John <span className="role-label">Developer</span></Checkbox>
                </Col>
                {/* Add more checkboxes as needed */}
              </Row>
            </Checkbox.Group>
          </div>
        </div>

        {/* Create and Delete Buttons */}
        <div className="form-buttons">
          <Button type="primary" onClick={handleCreate} className="create-btn">
            Create
          </Button>
          <Button type="default" className="delete-btn">
            Delete
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProjects;
