import React from "react";
import { Outlet, useRouteError } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";
import Error from "../pages/Error/Error";

const RootLayout = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar />

      {/* for handling error but also showing the navbar and footer */}
      <main className="grow">{error ? <Error></Error> : <Outlet />}</main>

      <Footer />
    </div>
  );
};

export default RootLayout;
