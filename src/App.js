import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header/Header";
import { Nav } from "./Header/Nav";
import { Articles } from "./Main/Articles";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
