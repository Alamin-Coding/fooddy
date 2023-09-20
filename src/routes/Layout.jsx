import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu";

const Layout = () => {
  return (
    <>
      <MainMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
