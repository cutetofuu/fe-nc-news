import { useState } from "react";
import { postComment } from "../utils/api";

export const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment).then((newCommentFromApi) => {
      setComments((currComments) => {
        return [newCommentFromApi, ...currComments];
      });
    });
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
    </form>
  );
};
