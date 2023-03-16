import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { Nav } from "./Header/Nav";
import { Articles } from "./Main/Articles";
import { SingleArticle } from "./Main/SingleArticle";
import { Topics } from "./Main/Topics";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("cooljmessy");
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  return (
    <div className="App">
      <Header />
      <Nav setSelectedTopic={setSelectedTopic} />
      <Routes>
        <Route
          path="/"
          element={
            <Articles
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <Articles
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle loggedInUser={loggedInUser} />}
        />
        <Route
          path="/topics"
          element={<Topics setSelectedTopic={setSelectedTopic} />}
        />
      </Routes>
    </div>
  );
}

export default App;
