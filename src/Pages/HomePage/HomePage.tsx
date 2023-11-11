import React from "react";
import HomePageStyled from "./HomePageStyled";
import PeopleList from "../../components/PeopleList/PeopleList";

const HomePage = (): React.ReactElement => {
  return (
    <>
      <HomePageStyled className="header">
        <h2 className="header__title">Create your network</h2>
        <span className="header__subtitle">Friend or Enemy?</span>
      </HomePageStyled>
      <PeopleList />
    </>
  );
};

export default HomePage;
