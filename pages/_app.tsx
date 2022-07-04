import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
