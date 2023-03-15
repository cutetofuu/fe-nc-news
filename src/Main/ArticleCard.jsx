import { useState } from "react";
import { Link } from "react-router-dom";
import { handleArticleUpvote, handleArticleDownvote } from "../utils/utils";

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
          <button
            className="button__upvote"
            onClick={() => handleArticleUpvote(article_id, setArticles, setErr)}
          >
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          {votes}
          <button
            className="button__downvote"
            onClick={() =>
              handleArticleDownvote(article_id, setArticles, setErr)
            }
          >
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
          <span>
            <i className="fa-regular fa-comment"></i> {comment_count}
          </span>
        </div>
      </div>
      {err ? <p className="err__message">{err}</p> : null}
    </section>
  );
};
