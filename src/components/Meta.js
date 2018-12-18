import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <title key="title">Sidecar</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="content-language" content="en-US" />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display|Lato:300,400,700"
        rel="stylesheet"
      />
      <style>{`svg { height: 2em; }`}</style>
    </Head>
  );
}
