import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleArticleCard } from "./SingleArticleCard";
import { CommentAdder } from "./CommentAdder";
import { Comments } from "./Comments";
import { getArticleById } from "../utils/api";
import { getCommentsByArticleId } from "../utils/api";

export const SingleArticle = ({ loggedInUser }) => {
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setArticleLoading(true);
    getArticleById(article_id).then((singleArticleData) => {
      setSingleArticle(singleArticleData);
      setArticleLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    setCommentsLoading(true);
    getCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
      setCommentsLoading(false);
    });
  }, [article_id]);

  return (
    <main>
      {articleLoading ? (
        <p>Loading article...</p>
      ) : (
        <>
          <SingleArticleCard
            singleArticle={singleArticle}
            setSingleArticle={setSingleArticle}
          />
          <CommentAdder
            article_id={article_id}
            setComments={setComments}
            loggedInUser={loggedInUser}
          />
          <h3>Comments</h3>
          {commentsLoading ? (
            <p>Loading comments...</p>
          ) : (
            <ul>
              {comments.map((comment) => {
                return (
                  <li key={comment.comment_id}>
                    <Comments
                      comment={comment}
                      setComments={setComments}
                      loggedInUser={loggedInUser}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </main>
  );
};
