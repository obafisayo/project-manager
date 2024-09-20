// landing page routes
export const HOME:string = "/"
export const ABOUT:string = "/about"
export const CONTACT:string = "/faqs"

// Auth Routes
export const ACCOUNT:string = 'account';
export const SIGNUP:string = '/account/signup';
export const SIGNIN:string = '/account/signin';
export const SIGNUP_OTP:string = '/account/signup-otp';
export const FORGOT_PASSWORD:string = '/account/forgot-password';

// Dashboard routes
export const DASHBOARD:string = "/account/dashboard"
export const PROJECTS:string = "/account/projects"
export const CREATE_PROJECTS:string = `${PROJECTS}/create-projects`;
export const EDIT_PROJECTS:string = `${PROJECTS}/edit-projects`;
export const TASKS:string = "/account/tasks"
// export const CREATE_TASKS:string = "/create-tasks"
// export const EDIT_TASKS:string = "/edit-tasks"
// export const PROFILE:string = "/profile"
// export const EDIT_PROFILE:string = "/edit-profile"
// NotFound
export const NOTFOUND:string = '404';
