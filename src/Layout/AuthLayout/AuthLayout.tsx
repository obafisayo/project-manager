import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button, Layout, Menu } from 'antd';
import './AuthLayout.css';
import DashboardNav from "../../components/navbars/dashboardNav/DashboardNav";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidNotepad } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { CloseOutlined, MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { DASHBOARD, PROJECTS, TASKS } from "../../routes/RouteConstants";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const { Header, Sider, Content } = Layout;

const AuthLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setCollapsed(true);
      setIsMobile(true);
    } else {
      setCollapsed(false);
      setIsMobile(false);
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
        <div className="side" style={{width: `${collapsed? isMobile? "0px" : "80px": "200px"}`}}>
          <Sider
            style={{
              display: `${!isMobile? "" : clicked? 'flex' : 'none'}`,
              height: `${isMobile? 'fit-content' : ''}`,
              position: "fixed",
              top: "9vh",
              bottom: 0,
              left: 0,
              backgroundColor: 'white',
              zIndex: 1000,
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
            {isMobile && <Button
              type="text"
              icon={clicked ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setClicked(!clicked)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                position: `${isMobile? 'fixed' : 'relative'}`,
                right: 0,
              }}
              className="click-btn"
            />}
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
