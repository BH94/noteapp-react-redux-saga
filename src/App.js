import React from "react";
import "./App.css";
import "antd/dist/antd.css";

// import ClassContainer from "./containers/ClassContainer";
import FunctionalContainer from "./containers/FunctionalContainer";
import WeatherContainer from "./containers/WeatherContainer";

const App = () => {
  return (
    <div>
      <WeatherContainer />
      <FunctionalContainer />
    </div>
  );
};

export default App;
