import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard.jsx";
import AddBook from "./pages/dashboard/AddBook.jsx";
import AddMember from "./pages/dashboard/AddMember.jsx";
import Books from "./pages/dashboard/Books.jsx";
import IssueBook from "./pages/dashboard/IssueBook.jsx";
import Members from "./pages/dashboard/Members.jsx";
import Reports from "./pages/dashboard/Reports.jsx";
import ReturnBook from "./pages/dashboard/ReturnBook.jsx";
import HomeLayout from "./pages/user/HomeLayout.jsx";
import Home from "./pages/user/Home.jsx";
import Login from "./pages/user/Login.jsx";
import UserBooks from "./pages/user/UserBooks.jsx";
import NewBooks from "./pages/user/NewBooks.jsx";
import UserHistory from "./pages/user/UserHistory.jsx";
import DashboardLayouts from "./pages/dashboard/DashboardLayouts.jsx";
const router = createBrowserRouter([
 {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>,
      
    },
    {
      path:"/login",
      element:<Login/>
    }
    ,
    {
      path:"/books",
      element:<UserBooks />
    }
    ,
    {
      path:"/New",
      element:<NewBooks/>
    }
    ,
    {
      path:"/History",
      element:<UserHistory/>
    }
  ]
 },
 {
  path:"/dashboard",
  element:<DashboardLayouts/>,
  children:[
    {
      path:"",
      element:<Dashboard/>
    },
    {
            path: "add-member",
            element: <AddMember />,
          },
          {
            path: "add-books",
            element: <AddBook />,
          },
          {
            path: "books",
            element: <Books />,
          },
          {
            path: "reports",
            element: <Reports />,
          },

  ]
 }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);