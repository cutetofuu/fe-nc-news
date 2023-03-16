import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";
import { useSearchParams } from "react-router-dom";

export const Articles = ({ selectedTopic, setSelectedTopic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  const topicQuery = newSearchParams.get("topic");

  useEffect(() => {
    if (selectedTopic !== undefined) {
      newSearchParams.set("topic", selectedTopic);
    } else if (topicQuery !== null) {
      setSelectedTopic(topicQuery);
    }
    setSearchParams(newSearchParams);
    setIsLoading(true);
    getArticles(selectedTopic).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [selectedTopic, topicQuery]);

  return (
    <main>
      {isLoading ? (
        <p>Loading articles...</p>
      ) : (
        <ul className="article__cards">
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <ArticleCard
                  key={article.article_id}
                  {...article}
                  setArticles={setArticles}
                />
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};
