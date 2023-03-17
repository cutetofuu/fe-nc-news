import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState("created_at");
  const [selectedOrder, setSelectedOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { topic_name } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_name, selectedSortBy, selectedOrder)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(`${err.response.status}: ${err.response.data.msg}`);
      });
  }, [topic_name, selectedSortBy, selectedOrder]);

  if (err) {
    return <p className="path__err_message">{err}</p>;
  }

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
                }}
              >
                <i className="fa-solid fa-angle-up"></i>
              </button>
              <button
                className="button__desc"
                value="desc"
                onClick={() => {
                  setSelectedOrder("desc");
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
