import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/product/:id",
        element: <ProductDetails/>
    }
])

export default router;