import Head from 'next/head';

import type { NextComponentType } from 'next';

import '../styles/global.css';

function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}): JSX.Element {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
