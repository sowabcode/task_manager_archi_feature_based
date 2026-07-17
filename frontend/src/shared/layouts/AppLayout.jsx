import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div className="app-layout bg-slate-100">
      {/* <Sidebar /> */}

      <main className="flex-1">
        <Header />

        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
