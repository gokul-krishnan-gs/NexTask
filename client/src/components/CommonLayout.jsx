import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  return (
    <div>
        <h1>Commom for All Pages</h1>
        <Outlet />
    </div>
  )
}
