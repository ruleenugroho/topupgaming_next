import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeatureGame from "../components/organisms/FeatureGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";
import { getFeaturedGame } from "../services/player";
import { GameItemTypes } from "../services/data-types";

interface gameListProps {
  gameList: GameItemTypes[];
}
const Home: NextPage<gameListProps> = (props: gameListProps) => {
  const { gameList } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>TopUpGaming - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="TopUpGaming - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/icon/logo.svg"
        />
        <meta property="og:url" content="http://localhost:3000" />
      </Head>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <MainBanner />

      {/* 3 Column-Feature */}
      <TransactionStep />

      {/* 5 Column-Featured-game */}
      <FeatureGame gameList={gameList} />

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

export async function getServerSideProps() {
  const data = await getFeaturedGame();
  return {
    props: {
      gameList: data.data,
    },
  };
}
