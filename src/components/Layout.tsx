import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <Outlet />
    </div>
  );
}
