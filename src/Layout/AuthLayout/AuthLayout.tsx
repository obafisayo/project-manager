import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button, Layout, Menu } from 'antd';
import './AuthLayout.css';
import DashboardNav from "../../components/navbars/dashboardNav/DashboardNav";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidNotepad } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { CloseOutlined, MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { CREATE_PROJECTS, DASHBOARD, PROJECTS, TASKS } from "../../routes/RouteConstants";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const { Header, Sider, Content } = Layout;

const AuthLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const location = useLocation();

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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setClicked(false);
    }
  };

  const menuItems = [
    {
      key: "1",
      icon: <AiFillProduct style={{ scale: "1.5" }} />,
      label: <Link to={DASHBOARD} onClick={handleMenuClick}>Dashboard</Link>,
    },
    {
      key: "2",
      icon: <BiSolidNotepad style={{ scale: "1.5" }} />,
      label: <Link to={PROJECTS} onClick={handleMenuClick}>Project</Link>,
    },
    {
      key: "3",
      icon: <FaTasks style={{ scale: "1.5" }} />,
      label: <Link to={TASKS} onClick={handleMenuClick}>Task</Link>,
    },
  ];

  const selectedKey = () => {
    if (location.pathname === DASHBOARD) return ['1'];
    if (location.pathname === PROJECTS) return ['2'];
    if (location.pathname === TASKS) return ['3'];
    return [];
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DashboardNav />
      <Layout>
        <div className="side" style={{ width: `${collapsed ? (isMobile ? "0px" : "80px") : "200px"}` }}>
          <Sider
            style={{
              display: `${!isMobile ? "" : clicked ? 'flex' : 'none'}`,
              height: `${isMobile ? 'fit-content' : ''}`,
              position: "fixed",
              top: "9vh",
              bottom: 0,
              left: 0,
              backgroundColor: 'white',
              zIndex: 1000,
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={selectedKey()}
              items={menuItems}
            />
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
                width: '64px',
                height: '64px',
                padding: 30,
              }}
              className="collapse-btn"
            />
            {isMobile && (
              <Button
                type="text"
                icon={clicked ? <CloseOutlined /> : <MenuOutlined />}
                onClick={() => setClicked(!clicked)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                  position: 'fixed',
                  right: 0,
                  zIndex: 10
                }}
                className="click-btn"
              />
            )}
            <Breadcrumb />
            {location.pathname === PROJECTS && (
              <Link to={CREATE_PROJECTS} className="create-project">
                <Button type="primary" size="large" className="create-button">
                  Create
                </Button>
              </Link>
            )}
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
