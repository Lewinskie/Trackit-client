import React from "react";
import SideNav from "../dashboard/side-nav";
import DashNav from "../dashboard/DashNav";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DashboardLayout = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 min-h-screen">
        <DashNav />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
