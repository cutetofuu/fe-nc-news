import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

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
