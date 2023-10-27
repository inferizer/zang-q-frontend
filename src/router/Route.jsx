import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/user/HomePage";
import CategoryPage from "../pages/user/CategoryPage";

const router = createBrowserRouter ([
    {
        path: '/',
        element: (
            <Layout/>
        ),
        children: [
            {path: '', element: <HomePage/>},
            {path: 'Category', element: <CategoryPage/>}
        ]
    }
])
export default function Router() {
    return <RouterProvider router={router}/>;
}