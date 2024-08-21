import Head from "next/head";
import LandingPage from "../components/landing";
import Footer from "../components/footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import MainDashboard from "../components/dashboard";

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
          <MainDashboard />
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
