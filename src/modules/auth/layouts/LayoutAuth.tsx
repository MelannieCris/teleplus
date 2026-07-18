import { Outlet } from "react-router-dom";

export default function LayoutAuth() {
  return (
    <main className="flex-fill">
      <Outlet />
    </main>
  );
}
