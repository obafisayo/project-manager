import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import { ABOUT, ACCOUNT, CONTACT, DASHBOARD, FORGOT_PASSWORD, HOME, PROJECTS, SIGNIN, SIGNUP, SIGNUP_OTP, TASKS } from './RouteConstants';
import LandingPageLayout from '../Layout/LandingPageLayout/LandingPageLayout';
import Home from '../pages/landingPage/home/Home';
import About from '../pages/landingPage/about/About';
import Contact from '../pages/landingPage/contact/Contact';
import AuthLayout from '../Layout/AuthLayout/AuthLayout';
import { NOTFOUND } from 'dns';
import NotFound from '../pages/landingPage/NotFound';
import ForgotPassword from '../pages/authPage/ForgotPassword';
import SignUp from '../pages/authPage/SignUp';
import SignIn from '../pages/authPage/SignIn';
import DashboardLayout from '../Layout/Dashboard/DashboardLayout';
import Dashboard from '../pages/DashboardPage/Dashboard';
import Account from '../pages/DashboardPage/account/Account';
import Projects from '../pages/DashboardPage/projects/Projects';
import Task from '../pages/DashboardPage/tasks/Task';

const Routes = () => {
  return useRoutes([
    {
        path: HOME,
        element: <LandingPageLayout />,
        children: [
            {
                path: HOME,
                element: <Home />
            },
            {
                path: ABOUT,
                element: <About />
            },
            {
                path: CONTACT,
                element: <Contact />
            },
        ]
    },
    {
        path: DASHBOARD,
        element: <DashboardLayout />,
        children: [
            {
                path: DASHBOARD,
                element: <Dashboard />
            },
            {
                path: PROJECTS,
                element: <Projects />
            },
            {
                path: TASKS,
                element: <Task />
            },
            {
                path: ACCOUNT,
                element: <Account />
            },
        ]
    },
    {
        path: ACCOUNT,
        element: <AuthLayout />,
        children: [
            {
                path: SIGNIN,
                element: <SignIn />
            },
            {
                path: SIGNUP,
                element: <SignUp />
            },
            {
                path: FORGOT_PASSWORD,
                element: <ForgotPassword />
            },
            {
                path: SIGNUP_OTP,
                element: <SIGNUP_OTP />
            },
            {
                path: NOTFOUND, element: <NotFound />
            },
            {
                path: '*', element: <Navigate to={`/${NOTFOUND}`} replace />
            }
        ]
    },
    { path: '*', element: <NotFound /> }
  ]);
}

export default Routes;