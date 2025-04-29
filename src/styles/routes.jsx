import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UsersListing from "../pages/UsersListing";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    },
    {
        path:"/listagem-de-usuarios",
        element:<UsersListing/>
    }
])

export default router