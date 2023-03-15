import { patchArticleDownvote, patchArticleUpvote } from "./api";

export const handleArticleUpvote = (article_id, setUserUpvote, setErr) => {
  setErr(false);
  setUserUpvote(1);
  patchArticleUpvote(article_id).catch(() => {
    setUserUpvote(0);
    setErr(true);
  });
};

export const handleArticleDownvote = (article_id, setUserDownvote, setErr) => {
  setErr(false);
  setUserDownvote(-1);
  patchArticleDownvote(article_id).catch(() => {
    setUserDownvote(0);
    setErr(true);
  });
};

export const handleSingleArticleUpvote = (
  article_id,
  setUserUpvote,
  setErr
) => {
  setErr(false);
  setUserUpvote(1);
  patchArticleUpvote(article_id).catch(() => {
    setUserUpvote(0);
    setErr(true);
  });
};

export const handleSingleArticleDownvote = (
  article_id,
  setUserDownvote,
  setErr
) => {
  setErr(false);
  setUserDownvote(-1);
  patchArticleDownvote(article_id).catch(() => {
    setUserDownvote(0);
    setErr(true);
  });
};
