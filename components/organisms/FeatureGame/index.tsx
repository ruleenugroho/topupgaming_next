import GameItem from "../../molecules/GameItem";
import { useEffect } from "react";
import axios from "axios";

export default function FeatureGame() {
  useEffect(async () => {
    const data = await axios.get(
      "https://topup-gaming.herokuapp.com/api/v1/players/landingpage"
    );
    console.log(data);
  }, []);
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            thumbnail="Thumbnail-1"
            title="Super Mechs"
            category="Mobile"
          />
          <GameItem
            thumbnail="Thumbnail-2"
            title="Call of Duty: Modern"
            category="Mobile"
          />
          <GameItem
            thumbnail="Thumbnail-3"
            title="Mobile Legends"
            category="Mobile"
          />
          <GameItem
            thumbnail="Thumbnail-4"
            title="Clash of Clans"
            category="Mobile"
          />
          <GameItem
            thumbnail="Thumbnail-5"
            title="Valorant"
            category="Desktop"
          />
        </div>
      </div>
    </section>
  );
}
