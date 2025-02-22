import { createBrowserRouter } from "react-router-dom";
import {FrontendRoute} from "./frontend"
import { AuthRoute } from "./auth";

export const AppRoutes = createBrowserRouter([...FrontendRoute, AuthRoute])