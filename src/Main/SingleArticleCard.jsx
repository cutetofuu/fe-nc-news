import { useState } from "react";
import {
  handleSingleArticleUpvote,
  handleSingleArticleDownvote,
} from "../utils/utils";

export const SingleArticleCard = ({
  singleArticle: {
    title,
    author,
    created_at,
    article_img_url,
    body,
    topic,
    votes,
    comment_count,
    article_id,
  },
}) => {
  const [userUpvote, setUserUpvote] = useState(0);
  const [userDownvote, setUserDownvote] = useState(0);
  const [err, setErr] = useState(null);
  const date = new Date(created_at);

  return (
    <section className="section__single_article">
      <h2 className="article__title">{title}</h2>
      <p className="single_article__author_and_date">
        <span>by {author}</span>
        <span>{date.toLocaleDateString()}</span>
      </p>
      <img src={article_img_url} alt={title} className="article__img" />
      <p className="body__single_article">{body}</p>
      <div className="article__card__footer">
        <span>#{topic}</span>
        <div className="article__icons">
          <button
            className="button__upvote"
            onClick={() =>
              handleSingleArticleUpvote(article_id, setUserUpvote, setErr)
            }
            disabled={userUpvote !== 0}
          >
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          {votes + userUpvote + userDownvote}
          <button
            className="button__downvote"
            onClick={() =>
              handleSingleArticleDownvote(article_id, setUserDownvote, setErr)
            }
            disabled={userDownvote !== 0}
          >
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
          <span>
            <i className="fa-regular fa-comment"></i> {comment_count}
          </span>
        </div>
      </div>
      {err ? (
        <p className="err__message">Something went wrong, please try again.</p>
      ) : null}
    </section>
  );
};
