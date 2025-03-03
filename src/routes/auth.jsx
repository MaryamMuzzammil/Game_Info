import { AuthLayout } from "../layout/auth/auth";
import Signin from "../pages/auth/signin/signin";
import Signup from "../pages/auth/signup/signup";
import Unprotected from "./Protected/unprotected";

export const AuthRoute = [
  {
    element: <Unprotected/>,
    children: [
      {
        element: <AuthLayout/>,
        children: [
          {
            path: '/signin',
            element: <Signin />
          },
          {
            path: '/signup',
            element: <Signup />
          },
        ],
      },
    ],
  },
];
