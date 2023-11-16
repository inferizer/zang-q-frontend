import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function Layout() {
  console.log('layout')
  return (
    <>
      <Header />
      <Outlet />
 
    </>
  );
}
