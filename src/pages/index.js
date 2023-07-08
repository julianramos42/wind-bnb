import IndexLayout from '../layouts/IndexLayout'
import Home from "./Home/Home";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout/>,
        children: [
            { path: '/home', element: <Home/> },
        ]
    }
])