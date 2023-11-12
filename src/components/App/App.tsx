import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";

const App = (): React.ReactElement => {
  return (
    <>
      <Header titleText="Hogwarts" subtitleText=" The social network ·" />
      <NavMenu />
      <Routes>
        <Route path="/list" element={<HomePage />} />
        <Route path="/" element={<Navigate to={"/list"} />} />
      </Routes>
    </>
  );
};

export default App;
