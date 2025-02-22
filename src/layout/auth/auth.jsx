import { Outlet } from "react-router-dom";
import Footer from "../frontend/component/footer/footer";

export const AuthLayout = () => {
  return (
    <>
  <Outlet/>
  <Footer/>

    </>
  );
};