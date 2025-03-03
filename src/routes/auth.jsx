import { AuthLayout } from "../layout/auth/auth";
import Signin from "../pages/auth/signin/signin";

export const AuthRoute = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/signin',
        element: <Signin />,
      },
    ],
  },
];
