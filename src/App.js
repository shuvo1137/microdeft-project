import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Header from "./Components/Header/Header";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
