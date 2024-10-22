import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { TaskT } from '../../../../utils/types';
import moment from 'moment';

interface CreateTaskProps {
  onCreate: (task: TaskT) => void; // Function to handle task creation
}

const { TextArea } = Input;
const { Option } = Select;

const CreateTask: React.FC<CreateTaskProps> = ({ onCreate }) => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);  // Loading state for button

  const handleSubmit = (values: any) => {
    setLoading(true);
    const newTask: TaskT = {
      id: Math.random().toString(36).substr(2, 9), // Generate random id
      project_id: '1',  // You can update this as needed
      title: values.title,
      description: values.description,
      dueDate: values.dueDate.format('YYYY-MM-DD'), // Use moment format
      issuesCount: 0,
      avatars: [],  // Can add functionality to select avatars
      creator: 'John Doe',  // Change to dynamic user
      priority: values.priority,
      status: values.status
    };

    onCreate(newTask);
    form.resetFields();  // Reset form after submission
    setLoading(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}
    >
      <Form.Item
        label="Task Title"
        name="title"
        rules={[{ required: true, message: 'Please input the task title!' }]}
      >
        <Input placeholder="Enter task title" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
      >
        <TextArea rows={4} placeholder="Enter task description" />
      </Form.Item>

      <Form.Item
        label="Due Date"
        name="dueDate"
        rules={[{ required: true, message: 'Please select a due date!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Priority"
        name="priority"
        rules={[{ required: true, message: 'Please select priority!' }]}
      >
        <Select placeholder="Select priority">
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: 'Please select status!' }]}
      >
        <Select placeholder="Select status">
          <Option value="Pending">Pending</Option>
          <Option value="In Progress">In Progress</Option>
          <Option value="Completed">Completed</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
