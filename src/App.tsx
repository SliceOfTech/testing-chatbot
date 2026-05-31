import { useState } from "react";
import "./App.css";
import { Head } from "@impalajs/react/head";

interface AppProps {
  title: string;
}

export const App: React.FC<React.PropsWithChildren<AppProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>Testing AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This is a demo" />
      </Head>
      {children}
    </>
  );
};
