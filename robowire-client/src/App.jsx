import "./App.scss";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
