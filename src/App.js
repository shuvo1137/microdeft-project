import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/" element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
