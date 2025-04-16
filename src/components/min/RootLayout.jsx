import React from "react";
import Navbar from "../medium/Navbar";
import Footer from "../medium/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
