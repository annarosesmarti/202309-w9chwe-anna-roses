import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePageStyled from "./HomePageStyled";
import PeopleList from "../../components/PeopleList/PeopleList";
import usePeopleApi from "../../Hooks/usePeopleApi";
import { loadPeopleActionCreator } from "../../store/features/people/peopleSlice";

const HomePage = (): React.ReactElement => {
  const { getPeople } = usePeopleApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentPeople = await getPeople();
      dispatch(loadPeopleActionCreator(currentPeople));
    })();
  }, [dispatch, getPeople]);

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
