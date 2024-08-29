import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/navbars/dashboardNav/DashboardNav";

function AuthLayout() {
    return(
        <div>
            <DashboardNav />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AuthLayout;
