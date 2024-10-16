import React from 'react';
import { Form, Input, DatePicker, Select, Checkbox, Button, Row, Col } from 'antd';
import './createprojects.css';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../../../../routes/RouteConstants';
import { useCreateData } from '../../../../contexts/CreateDataContext';
import moment from 'moment';

const { TextArea } = Input;
const { Option } = Select;

const CreateProjects = () => {
  const { setProjectData } = useCreateData();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleCreate = () => {
    form.validateFields().then((values) => {
      const newProject = {
        id: (Math.floor(Math.random() * 10000)).toString(),
        title: values.title,
        description: values.description,
        startDate: moment(values.startDate.format("YYYY-MM-DD")),
        dueDate: moment(values.dueDate.format("YYYY-MM-DD")),
        roles: values.roles,
        type: values.type,
        issuesCount: 0,
        avatars: [],
      };

      setProjectData((prevData: any) => {
        const newdata = [...prevData, newProject]
        console.log(newdata)
        return newdata;
      });
      form.resetFields();
      navigate(PROJECTS);
    }).catch((errorInfo) => {
      console.log('Validation Failed:', errorInfo);
    });
  };

  const handleDelete = () => {
    form.resetFields();
    navigate(PROJECTS);
  }

  return (
    <div className="create-project-container">
      <Form form={form} layout="vertical" className="create-project-form">
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="title"
              label="Project Title"
              rules={[{ required: true, message: 'Please enter the project title' }]}
            >
              <Input placeholder="Enter project title" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="type"
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
              name="dueDate"
              label="Due Date"
              rules={[{ required: true, message: 'Please select the end date' }]}
            >
              <DatePicker style={{ width: '100%' }} placeholder="DD/MM/YYYY" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="description"
          label="Project Description"
          rules={[{ required: true, message: 'Please enter the project description' }]}
        >
          <TextArea rows={4} placeholder="Enter project description" />
        </Form.Item>

        <div className="roles-box">
          <Form.Item
            name="roles"
            label="Project Roles"
            rules={[{ required: true, message: 'Please select the project role' }]}
          >
            <Select placeholder="Select project role">
              <Option value="team Lead">Team Lead</Option>
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
              </Row>
            </Checkbox.Group>
          </div>
        </div>

        <div className="form-buttons">
          <Button type="primary" onClick={handleCreate} className="create-btn">
            Create
          </Button>
          <Button type="default" onClick={handleDelete} className="delete-btn">
            Delete
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProjects;
