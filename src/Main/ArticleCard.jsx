import { useState } from "react";
import { Link } from "react-router-dom";
import { patchArticleDownvote, patchArticleUpvote } from "../utils/api";

export const ArticleCard = ({
  article_img_url,
  title,
  author,
  votes,
  comment_count,
  topic,
  created_at,
  article_id,
  setArticles,
}) => {
  const [err, setErr] = useState(null);
  const date = new Date(created_at);

  const handleArticleUpvote = (article_id) => {
    setArticles((currArticles) => {
      return currArticles.map((article) => {
        if (article.article_id === article_id) {
          return { ...article, votes: article.votes + 1 };
        }
        return article;
      });
    });

    patchArticleUpvote(article_id).catch(() => {
      setArticles((currArticles) => {
        return currArticles.map((article) => {
          if (article.article_id === article_id) {
            return { ...article, votes: article.votes - 1 };
          }
          return article;
        });
      });
      setErr("Something went wrong, please try again.");
    });
  };

  const handleArticleDownvote = (article_id) => {
    setArticles((currArticles) => {
      return currArticles.map((article) => {
        if (article.article_id === article_id) {
          return { ...article, votes: article.votes - 1 };
        }
        return article;
      });
    });

    patchArticleDownvote(article_id).catch(() => {
      setArticles((currArticles) => {
        return currArticles.map((article) => {
          if (article.article_id === article_id) {
            return { ...article, votes: article.votes + 1 };
          }
          return article;
        });
      });
      setErr("Something went wrong, please try again.");
    });
  };

  return (
    <section className="section__article">
      <Link to={`/articles/${article_id}`} className="links">
        <img src={article_img_url} alt={title} className="article__img" />
        <h2 className="article__title">{title}</h2>
      </Link>
      <p className="article__author_and_date">
        By {author} on {date.toLocaleDateString()}
      </p>
      <div className="article__card__footer">
        <span>#{topic}</span>
        <div className="article__icons">
          <button onClick={() => handleArticleUpvote(article_id)}>
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          {votes}
          <button onClick={() => handleArticleDownvote(article_id)}>
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
          <span>
            <i className="fa-regular fa-comment"></i> {comment_count}
          </span>
        </div>
      </div>
      {err ? <p>{err}</p> : null}
    </section>
  );
};
