import { createBrowserRouter } from "react-router-dom";
import {FrontendRoute} from "./frontend"
import { AuthRoute } from "./auth";
import { AdminRoute } from "./Admin";


export const AppRoutes = createBrowserRouter([...FrontendRoute,...AuthRoute, ...AdminRoute])