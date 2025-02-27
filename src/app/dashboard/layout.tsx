import Aside from "@/components/dashboard_ui/Aside";
import { ReactNode } from "react";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Aside />
      {/* Main Content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
