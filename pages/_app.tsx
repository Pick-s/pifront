import React from "react";
import { AppProps } from "next/app";
import "@styles/app.scss";
import "@styles/global.scss";
import { RootStoreProvider } from "@mobx";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RootStoreProvider>
      <Component {...pageProps} />
    </RootStoreProvider>
  );
}

export default MyApp;
