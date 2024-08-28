// src/components/ProtectedRoute.js
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !user) {
        // Redirect to the login page if not authenticated and store the redirect url
        router.push({
          pathname: "/api/auth/login",
          query: {
            returnTo: router.asPath,
          },
        });
      }
    }, [isLoading, user, router]);

    if (isLoading) return <div>Loading...</div>;

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
