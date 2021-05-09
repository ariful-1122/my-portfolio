import Layout from "../components/layouts/layout";
import "../styles/scss/main.scss";

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
