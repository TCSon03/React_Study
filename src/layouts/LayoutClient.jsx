import React from "react";
import Header from "../components/client/Header";
import { Outlet } from "react-router-dom";

const LayoutClient = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutClient;
