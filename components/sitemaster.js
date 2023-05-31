import React from "react";
import Head from "next/head";
import MetaGenerator from "./meta-generator";

export default function SiteMaster() {
  return (
    <Head>
      <title>Lynkaz</title>
      <meta
        name="description"
        content="Say goodbye to procurement stress with Lynkaz. Procurement Simplified"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
