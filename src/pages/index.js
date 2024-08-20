import Head from "next/head";
import LandingPage from "../components/landing";
import Footer from "../components/footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import Sidebar from "../components/sidebar";
import SidebarOverlay from "../components/sidebar-overlay";
import DashNav from "../components/dash-nav";
import DashContent from "../components/dash-content";

export default function Home() {
  const { isLoading, error, user } = useUser();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {user ? (
        <div className="text-gray-800 font-inter">
          <Sidebar />
          <SidebarOverlay />
          <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
            <DashNav />
            <DashContent />
          </div>
        </div>
      ) : (
        <>
          <LandingPage />
          <Footer />
        </>
      )}
    </>
  );
}
