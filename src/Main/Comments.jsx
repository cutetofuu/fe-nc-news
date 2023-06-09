import { useState } from "react";
import { deleteComment } from "../utils/api";

export const Comments = ({
  comment: { body, author, created_at, votes, comment_id },
  setComments,
  loggedInUser,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [deleteInProgress, setDeleteInProgress] = useState(null);
  const [err, setErr] = useState(null);

  const date = new Date(created_at);

  const handleDelete = (comment_id) => {
    setConfirmDelete(false);
    setDeleteInProgress(true);
    setErr(false);
    deleteComment(comment_id)
      .then(() => {
        setComments((currComments) =>
          currComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          })
        );
        setDeleteInProgress(false);
      })
      .catch(() => {
        setDeleteInProgress(false);
        setErr(true);
      });
  };

  return (
    <div>
      <section className="section__comment">
        <p>{body}</p>
        <div className="comment__author_date_votes">
          <span>
            {author}, {date.toLocaleDateString()}
          </span>
          <div className="comment__vote_and_delete">
            <span>
              <i className="fa-regular fa-thumbs-up"></i> {votes}
            </span>
            {author === loggedInUser ? (
              <button
                className="button__confirm_delete_comment"
                onClick={() => setConfirmDelete(true)}
                disabled={deleteInProgress === true}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            ) : null}
          </div>
        </div>
        {confirmDelete ? (
          <div className="confirm_delete__message">
            <p className="header__confirm_delete">
              Are you sure you want to delete your comment?
            </p>
            <div className="buttons__delete_options">
              <button
                className="button__delete_comment"
                onClick={() => handleDelete(comment_id)}
              >
                Yes
              </button>
              <button
                className="button__cancel_delete_comment"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
        {deleteInProgress ? (
          <p className="message__in_progress">Deleting comment...</p>
        ) : null}
        {err ? (
          <p className="err__message">
            Something went wrong, please try again.
          </p>
        ) : null}
      </section>
    </div>
  );
};
