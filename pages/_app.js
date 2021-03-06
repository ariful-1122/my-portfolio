import Layout from "../components/layouts/layout";
import "../styles/scss/main.scss";
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <title>Welcome to my portfolio website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="top nextjs developer in the world" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer/>
    </Layout>
  );
}

export default MyApp;
