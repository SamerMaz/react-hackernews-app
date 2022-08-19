import React, { useState } from "react";
import TopStories from "../components/topStories";
import useDataFetcher from "../hooks/dataFetcher";

const Home = () => {

  return (
    <React.Fragment>
      <TopStories />
    </React.Fragment>
  );
};

export default Home;
