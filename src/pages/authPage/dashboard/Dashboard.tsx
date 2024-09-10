import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Space, Switch } from 'antd';
import "./Dashboard.css"
import ProjectImage from "../../../assets/img/project_image.png"
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../../routes/RouteConstants';

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <Flex gap="middle" align="start" >
        {/* <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} /> */}
          <Link to={PROJECTS} style={{ width: "40%" }}>
            <Card className='shadow-lg' loading={loading} >
              <Card.Meta className='shadow-lg'
              description={
                <div className="card">
                  <figure className="logo-icon">
                    <figcaption>Projects</figcaption>
                    <img src={ProjectImage} alt="AProject Logo" />
                  </figure>
                </div>
              }
              />
            </Card>
          </Link>
          <Card className='shadow-lg' loading={loading} actions={actions} style={{ width: "60%" }}>
            <Card.Meta className='shadow-lg'
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
              title="Card title"
              description={
                <>
                  <p>This is the description</p>
                  <p>This is the description</p>
                </>
              }
            />
          </Card>
      </Flex>
    </div>
  )
}

export default Dashboard;
