import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ABOUT,CREATE_PROJECTS, ACCOUNT, CONTACT, DASHBOARD, FORGOT_PASSWORD, HOME, PROJECTS, SIGNIN, SIGNUP, SIGNUP_OTP, TASKS, NOTFOUND, EDIT_PROJECTS } from './RouteConstants';
import LandingPageLayout from '../Layout/LandingPageLayout/LandingPageLayout';
import Home from '../pages/landingPage/home/Home';
import About from '../pages/landingPage/about/About';
import Contact from '../pages/landingPage/contact/Contact';
import AuthLayout from '../Layout/AuthLayout/AuthLayout';
import NotFound from '../pages/landingPage/NotFound';
import ForgotPassword from '../pages/authPage/ForgotPassword';
import SignUp from '../pages/authPage/SignUp';
import SignIn from '../pages/authPage/SignIn';
import Dashboard from '../pages/authPage/dashboard/Dashboard';
import Projects from '../pages/authPage/projects/Projects';
import CreateProjects from '../pages/authPage/projects/createProjects/CreateProjects'; // Import CreateProjects
import Task from '../pages/authPage/tasks/Task';
import Account from '../pages/authPage/account/Account';
import EditProject from '../pages/authPage/projects/editProjects/EditProjects';

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
      path: ACCOUNT,
      element: <AuthLayout />,
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
          path: CREATE_PROJECTS,
          element: <CreateProjects />
        },
        {
          path: EDIT_PROJECTS,
          element: <EditProject />
        },
        {
          path: TASKS,
          element: <Task />
        },
        {
          path: ACCOUNT,
          element: <Account />
        },
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
          path: NOTFOUND,
          element: <NotFound />
        },
        {
          path: '*',
          element: <Navigate to={`/${NOTFOUND}`} replace />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
}

export default Routes;
