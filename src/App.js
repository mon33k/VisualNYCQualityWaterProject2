import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import NycMap from "./components/nycmap/NycMap";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">HI HERE IS THE PROJECT</header> */}
      <NycMap />
    </div>
  );
}

export default App;
