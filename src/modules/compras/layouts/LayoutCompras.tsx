import { Outlet } from "react-router-dom";

export default function LayoutCompras() {
  return (
    <main className="flex-fill">
      <Outlet />
    </main>
  );
}
