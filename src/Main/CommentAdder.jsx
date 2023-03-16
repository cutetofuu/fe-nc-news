import { useState } from "react";
import { postComment } from "../utils/api";

export const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [postInProgress, setPostInProgress] = useState(null);
  const [postSuccess, setPostSuccess] = useState(null);
  const [emptyComment, setEmptyComment] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.length === 0) {
      setEmptyComment(true);
      setPostSuccess(false);
    } else {
      setEmptyComment(false);
      setPostInProgress(true);
      postComment(article_id, newComment)
        .then((newCommentFromApi) => {
          setComments((currComments) => {
            return [newCommentFromApi, ...currComments];
          });
          setPostInProgress(false);
          setPostSuccess(true);
          setErr(false);
        })
        .catch(() => {
          setPostInProgress(false);
          setPostSuccess(false);
          setErr(true);
        });
    }
  };

  return (
    <form className="comment_adder" onSubmit={handleSubmit}>
      <label htmlFor="new_comment">
        <h3>Add a Comment</h3>
        <textarea
          id="new_comment"
          className="textarea__new_comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="Enter text here..."
        />
      </label>
      <button className="button_comment_adder" type="submit">
        POST
      </button>
      {emptyComment ? (
        <p className="post_err__message">Please enter a comment.</p>
      ) : null}
      {postInProgress ? <p>Posting comment...</p> : null}
      {err ? (
        <p className="post_err__message">
          Something went wrong, please try again.
        </p>
      ) : null}
      {postSuccess ? (
        <p className="post_success__message">Your post was successful!</p>
      ) : null}
    </form>
  );
};
