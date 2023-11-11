import React from "react";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <header className="header">
        <h2 className="header__title">Create your network</h2>
        <span className="header__subtitle">Friend or Enemy?</span>
      </header>
    </HomePageStyled>
  );
};

export default HomePage;
