import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/categories/:category',
                element: <CategoryItems />,
                loader: ({params}) => fetch(`http://localhost:5000/phones/categories/${params.category}`)
            }
        ]
    }
])