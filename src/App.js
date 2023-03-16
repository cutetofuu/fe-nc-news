import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { Nav } from "./Header/Nav";
import { Articles } from "./Main/Articles";
import { SingleArticle } from "./Main/SingleArticle";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("cooljmessy");

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle loggedInUser={loggedInUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
