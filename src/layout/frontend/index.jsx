import { Outlet } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import ScrollToTop from "../../scroll/scroll";


export const FrontLayout = () => {
  return (
    <>
      <ScrollToTop /> {/* Ensures scroll resets on every navigation */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
