import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeatureGame from "../components/organisms/FeatureGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <MainBanner />

      {/* 3 Column-Feature */}
      <TransactionStep />

      {/* 5 Column-Featured-game */}
      <FeatureGame />

      {/* Reached */}
      <Reached />

      {/* Story */}
      <Story />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
