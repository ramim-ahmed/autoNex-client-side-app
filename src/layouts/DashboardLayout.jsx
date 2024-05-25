import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    <div>
      <div>side bar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
