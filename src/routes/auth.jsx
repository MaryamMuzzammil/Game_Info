import Signin from "../auth/signin/signin";
import { AuthLayout } from "../layout/auth/auth";
// import Unprotected from "./protected/unprotected";

export const AuthRoute = [
    // {
    // element: <Unprotected />,
    // children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/signin",
              element: < Signin />,
            },
          ],
        },
      // ],
    // }
]