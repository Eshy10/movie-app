import React from "react";
import Navbar from "../components/Navbar/navbar";
import Header from "../components/Header";
import CardWrapper from "../components/CardWrapper";
import Search from "../components/Search";
import styles from "./homepage.module.css";
import Layout from "../components/Layout";

const Homepage = () => {
  return (
    <section className={styles["home"]}>
      <Navbar />
      <Header />
      <Layout>
        <Search />
        <CardWrapper />
      </Layout>
    </section>
  );
};

export default Homepage;
