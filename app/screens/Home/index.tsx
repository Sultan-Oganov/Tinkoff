import React, { FC } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Stories from "../../components/Stories/Stories";

const Home: FC = () => {

  return (
    <Layout>
      <Header />
      <Stories />
    </Layout>
  );
};

export default Home;
