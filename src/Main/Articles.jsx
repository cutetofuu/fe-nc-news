import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_name } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_name).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topic_name]);

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
