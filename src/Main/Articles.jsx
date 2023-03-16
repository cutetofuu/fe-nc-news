import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);

  useEffect(() => {
    setIsLoading(true);
    getArticles(selectedSortBy, selectedOrder).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [selectedSortBy, selectedOrder]);

  return (
    <main>
      {isLoading ? (
        <p>Loading articles...</p>
      ) : (
        <>
          <section className="section__sort_by">
            <label htmlFor="select__sort_by" className="select__dropdown_label">
              Sort by:
              <select
                id="select__sort_by"
                className="select__dropdown_box"
                value={selectedSortBy}
                onChange={(event) => {
                  setSelectedSortBy(event.target.value);
                  newSearchParams.set("sort_by", event.target.value);
                  setSearchParams(newSearchParams);
                }}
              >
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
              </select>
            </label>
            <div className="buttons__order">
              <button
                className="button__asc"
                value="asc"
                onClick={() => {
                  setSelectedOrder("asc");
                  newSearchParams.set("order", "asc");
                  setSearchParams(newSearchParams);
                }}
              >
                <i className="fa-solid fa-angle-up"></i>
              </button>
              <button
                className="button__desc"
                value="desc"
                onClick={() => {
                  setSelectedOrder("desc");
                  newSearchParams.set("order", "desc");
                  setSearchParams(newSearchParams);
                }}
              >
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
          </section>

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
        </>
      )}
    </main>
  );
};
