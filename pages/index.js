import React from "react";
import About from "../components/layouts/About";
import Home from "../components/Home";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Welcome to my website ✋🏼</title>
        <meta
          name="description"
          content="top nextjs developer in the world, top react developer in the world, top nodejs developer in the world, top nextjs developer in bangladesh, top react developer in bangladesh, top nodejs devloper in bangladesh"
        />
      </Head>
      <Home />
    </>
  );
  
}

export default HomePage;
