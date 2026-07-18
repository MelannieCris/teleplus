import { Outlet } from "react-router-dom";

export default function LayoutHome() {
  return (
    <main className="flex-fill">
      <Outlet />
    </main>
  );
}
