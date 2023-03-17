import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header/Header";
import { Nav } from "./Header/Nav";
import { Articles } from "./Main/Articles";
import { SingleArticle } from "./Main/SingleArticle";
import { Topics } from "./Main/Topics";

function App() {
  const loggedInUser = "cooljmessy";

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
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_name" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
