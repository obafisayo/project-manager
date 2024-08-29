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
        <aside className="aside">
          <div className="aside-search">
            <CiSearch size={28} className="aside-icon"/>
            <input type="text" placeholder="Search for anything..." aria-label="Search" />
          </div>
          <Button type="primary">Sign In</Button>
        </aside>
      </div>
    </nav>
  );
}

export default DashboardNav;