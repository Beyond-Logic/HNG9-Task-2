/** @format */

import React from "react";
import { MainSection } from "../components";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <div className="md:px-[114px] px-[16px]">
        <NavBar />
        <MainSection />
        {/* <Footer />  */}
      </div>
    </div>
  );
};

export default Home;
