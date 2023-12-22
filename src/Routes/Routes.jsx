import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home/Home/Home";
import Login from "../Home/Home/Login/Login";
import SignUp from "../Home/SignUp/SignUp";
import Dashboard from "../layout/Dash";
import ManageTask from "../pages/Dashboard/ManageTask/ManageTask";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'manageTask',
        element: <ManageTask></ManageTask>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      
    ]
  }
  ]);