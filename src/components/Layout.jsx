import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <main className="layout-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;