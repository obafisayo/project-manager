import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button, Layout, Menu } from 'antd';
import './AuthLayout.css';
import DashboardNav from "../../components/navbars/dashboardNav/DashboardNav";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidNotepad } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { DASHBOARD, PROJECTS, TASKS } from "../../routes/RouteConstants";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const { Header, Sider, Content } = Layout;

const AuthLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    // Set initial collapsed state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DashboardNav />
      <Layout>
        <div className="side" style={{width: `${collapsed? "80px": "200px"}`}}>
          <Sider
            style={{
              position: "fixed",
              top: '9vh',
              bottom: 0,
              left: 0,
              background: "white",
            }}
            trigger={null} collapsible collapsed={collapsed}>
              <Menu
                className=""
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                
              >
                <Menu.Item key="1"
                  icon={<AiFillProduct style={{scale: "1.5"}} />}
                  style={{ marginTop: "20px", fontWeight: 600 }}
                >
                  <Link to={DASHBOARD}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2"
                  icon={<BiSolidNotepad style={{scale: "1.5"}} />}
                  style={{ marginTop: "20px", fontWeight: 600 }}
                >
                  <Link to={PROJECTS}>Project</Link>
                </Menu.Item>
                <Menu.Item key="3"
                  icon={<FaTasks style={{scale: "1.5"}} />}
                  style={{ marginTop: "20px", fontWeight: 600 }}
                >
                  <Link to={TASKS}>Task</Link>
                </Menu.Item>
              </Menu>
          </Sider>
        </div>
        <Layout>
          <Header style={{ padding: 0, background: "transparent", display: 'flex', gap: 10 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64
              }}
              className="collapse-btn"
            />
            <Breadcrumb />
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
