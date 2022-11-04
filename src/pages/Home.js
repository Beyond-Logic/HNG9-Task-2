/** @format */

import React, { useEffect } from "react";
import { Footer, MainSection } from "../components";
import NavBar from "../components/NavBar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="md:px-[114px] px-[16px]">
        <NavBar />
        <MainSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
