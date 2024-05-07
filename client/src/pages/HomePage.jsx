import React from "react";
import Formation from "../components/Formation";
import History from "../components/History";
import AvaTypewriterEffect from "../components/ui/AvaTypewriterEffect";
import { words } from "../lib/ProvidedInformationsConstants";

const HomePage = () => {
  return (
    <div className="sm:grid-cols-1 grid-cols-3 mt-12">
      <AvaTypewriterEffect words={words} />
      <Formation />
      <History />
    </div>
  );
};

export default HomePage;
