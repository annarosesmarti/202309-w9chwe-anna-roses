import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header titleText="Hogwarts" subtitleText=" The social network ·" />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </>
  );
};

export default App;
