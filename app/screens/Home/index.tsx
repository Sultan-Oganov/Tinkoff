import React, { FC } from "react";
import Accounts from "../../components/Accounts/Accounts";
import ApplyNewProduct from "../../components/ApplyNewProduct/ApplyNewProduct";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Stories from "../../components/Stories/Stories";

const Home: FC = () => {

  return (
    <Layout>
      <Header />
      <Stories />
      <Accounts />
      <ApplyNewProduct />
    </Layout>
  );
};

export default Home;
