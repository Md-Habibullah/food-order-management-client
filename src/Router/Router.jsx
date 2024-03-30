import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import FoodReview from "../Pages/FoodReview";
import Users from "../Pages/Users";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdatedFood from "../Components/UpdatedFood";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://food-order-management-server.vercel.app/foods'),
                element: <Home></Home>
            },
            {
                path: '/review',
                element: <FoodReview></FoodReview>
            },
            {
                path: '/users',
                element: <Users></Users>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateFood/:id',
                loader: ({ params }) => fetch(`https://food-order-management-server.vercel.app/foods/${params.id}`),
                element: <UpdatedFood></UpdatedFood>
            }
        ]
    }
])

export default Router;