import React from 'react';
import { Link } from 'react-router-dom';
import "./DashboardNav.css";
import Logo from "../../../assets/svg/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';
import { ACCOUNT } from '../../../routes/RouteConstants';

type CustomIconComponentProps = GetProps<typeof Icon>;

const BellIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={IoNotificationsOutline} {...props} />
);

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
          <div className="relative">
            <CiSearch size={28} className="aside-search" />
            <input type="text" placeholder="Search for anything..." aria-label="Search" />
          </div>
          <Badge dot>
            <BellIcon className="aside-bell" />
          </Badge>
          <Link to={ACCOUNT}>
            <div className="user">
              <div className="text">
                <h1>Obafisayo Abimbola</h1>
                <p>LG, Nigeria</p>
              </div>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                // src="https://res.cloudinary.com/dafdhu3h5/image/upload/e_background_removal/f_png/v1719653866/IMG_0359_tuz6dc.jpg"
              />
            </div>
          </Link>
        </aside>
      </div>
    </nav>
  );
}

export default DashboardNav;