import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

function myApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default myApp;
