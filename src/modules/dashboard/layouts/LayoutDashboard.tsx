import { Outlet } from "react-router-dom";

export default function LayoutDashboard() {
  return (
    <main className="flex-fill">
      <Outlet />
    </main>
  );
}
