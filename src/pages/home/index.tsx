// src/pages/home/index.tsx

import React from "react";

import Advertising from "../../components/Home/Advertising/Advertising";
import Emphasis from "../../components/Home/Emphasis/Emphasis";
import Evaluated from "../../components/Home/Evaluated/Evaluated";
import Sale from "../../components/Home/Sale/Sale";

const Home: React.FC = () => {
  return (
    <>
      <Advertising />
      <Emphasis />
      <Evaluated />
      <Sale />
    </>
  );
};

export default Home;
