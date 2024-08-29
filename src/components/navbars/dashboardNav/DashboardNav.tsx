import React from 'react';
import "./DashboardNav.css";
import Logo from "../../../assets/svg/logo.svg";
import { CiSearch } from "react-icons/ci";
import { Button } from 'antd';

const DashboardNav = () => {
  return (
    <nav className="p-2 shadow-md">
      <div className="container">
        <div className="logo">
          <figure className="logo-icon">
            <img src={Logo} alt="AProject Logo" />
            <figcaption>AProjectO</figcaption>
          </figure>
        </div>
        <aside className="aside border">
          <CiSearch size={32} className="aside-icon"/>
          <input type="text" placeholder="Search..." aria-label="Search" />
        </aside>
        <Button type="primary">Primary Button</Button>
      </div>
    </nav>
  );
}

export default DashboardNav;