import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
// import { Helmet } from "react-helmet-async";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      {/* <Helmet>
        <title>Home - FoodyMood</title>
        <meta name="description" content="Welcome to FoodyMood's home page!" />
      </Helmet> */}
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} setCategory={setCategory} />
      <AppDownload />
    </>
  );
};

Home.meta = {
  title: 'Home Page',
  description: 'Welcome to the home page of our site.',
};

export default Home;
