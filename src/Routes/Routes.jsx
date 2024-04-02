import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import AddTask from "../Dashboard/AddTask/AddTask";
import MyTask from "../Dashboard/MyTask/MyTask";

// Create a BrowserRouter with defined routes
export const router = createBrowserRouter([
    {
        // Route for the main layout
        path: "/",
        element: <Layout />,
        children: [
            {
                // Route for the home page
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        // Route for the dashboard layout
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                // Route for creating a new task
                path: "/dashboard/createnewtask",
                element: <AddTask />,
            },
            {
                // Route for displaying user's tasks
                path: "/dashboard/mytask",
                element: <MyTask />,
            },
        ],
    },
]);
