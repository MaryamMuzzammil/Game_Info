import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { ToastContainer } from "react-toastify"; // ✅ Import Toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ Import CSS


const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh(); // Refresh animations after navigation
  }, []);

  return (
    <>
      <RouterProvider router={AppRoutes} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

root.render(<App />);
