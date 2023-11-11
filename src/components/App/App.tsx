import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header titleText="Hogwarts" subtitleText=" The social network ·" />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};

export default App;
