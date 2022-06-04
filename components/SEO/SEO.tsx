import Head from "next/head";

function SEO({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/icon.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"
      />
      <meta name="description" content="SBSociety Makes u fly. Try it." />
      <meta name="theme-color" content="white" />
      <meta name="twitter:site" content="@KevinCollazos_" />

      <meta property="og:title" content="SBSociety" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Makes u fly." />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    </Head>
  );
}

export default SEO;
