import { createBrowserRouter } from "react-router";
import HomeLayout from "../src/Layouts/HomeLayout";
import Home from './../src/Pages/Home';
import CategoryNews from "../src/Pages/CategoryNews";
import Login from './../src/Pages/Login';
import Register from './../src/Pages/Register';
import AuthLayout from "../src/Layouts/AuthLAyout";
import About from './../src/Pages/About';
import Career from './../src/Pages/Career';


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>,
                    loader: () => fetch("/news.json"),
                },
                {
                    path:"/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=>fetch("/news.json"),
                },
              
            ]
        },{
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element: <Login></Login>
                },
                {
                    path:"/auth/register",
                    element: <Register></Register>
                }
            ]

        },
        {
            
  path: "/about",
  element: <About />,

        },
        {
            path:"/*",
            element: <h2>Error 404</h2>
        },
        {
  path: "/career",
  element: <Career />,
}
    ]

)

export default router;