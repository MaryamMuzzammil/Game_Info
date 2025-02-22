import { Outlet } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
export const FrontLayout = () => {
  return (
    <>
  <Header/>
  <Outlet/>
  <Footer/>
    </>
  );
};
