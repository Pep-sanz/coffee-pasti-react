import { Outlet } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar";

export default function RootLayout() {
  return (
    <>
      <MyNavbar />
      <p />
      <Outlet />
    </>
  );
}
