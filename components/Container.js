import Head from 'next/head'
import React from "react";
import Navigation from "./Navigation";

const Container = (props) => {
  return (
    <div>
        <Head>
            <title>Next.js Project</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous"></link>
        </Head>
      <Navigation />
      <div className="container p-4">
          {props.children}
      </div>
    </div>
  );
};


export default Container