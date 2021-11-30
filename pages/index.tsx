import Head from "next/head";
import React from "react";

import { Logo, NavBarRightSection } from "../components/NavBarComponents";

import Img from "../karthi.jpg";
const Home = () => {
  return (
    <div>
      <div className="flex justify-center  h-16 ">
        <NavBar />

        <Head>
          {/* oxxgen font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
            rel="stylesheet"
          />
          {/* poppins fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />

          {/* source code pro font */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap"
            rel="stylesheet"
          />

          <title>Karthi's Portfolio</title>
        </Head>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className=" h-full w-8/12 bg-dark-light rounded-b-xl overflow-hidden flex items-center shadow-lg">
      <div className="h-full w-20 flex items-center justify-center">
        <Logo Img={Img} />
      </div>
      <NavBarRightSection></NavBarRightSection>
    </nav>
  );
};

export default Home;
