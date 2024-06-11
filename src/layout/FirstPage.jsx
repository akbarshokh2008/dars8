import React from "react";
import "../App.css";
import "./FirstPage.css";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
