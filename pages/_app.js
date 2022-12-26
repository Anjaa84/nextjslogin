import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import store from '../store'
import { Provider } from "../node_modules/react-redux/es/exports";
function MyApp({ Component, pageProps }) {
  console.log("myapp")
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
      </Head>
      <Provider store={store}>
        
      <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}
export default MyApp;
