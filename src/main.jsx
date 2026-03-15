import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard.jsx';
import AddBook from './pages/dashboard/AddBook.jsx';
import AddMember from './pages/dashboard/AddMember.jsx';
import Books from './pages/dashboard/Books.jsx';
import IssueBook from './pages/dashboard/IssueBook.jsx';
import Members from './pages/dashboard/Members.jsx';
import Reports from './pages/dashboard/Reports.jsx'
import ReturnBook from './pages/dashboard/ReturnBook.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/add-member",
        element:<AddMember/>
      },
      {
        path:"/add-books",
        element:<AddBook/>
      },
      {
        path:"/books",
        element:<Books/>
      },
      {
        path:"/reports",
        element:<Reports/>
      }
    ]
  }
]);

<RouterProvider router={router} />
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)