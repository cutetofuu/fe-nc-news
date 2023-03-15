import { patchArticleDownvote, patchArticleUpvote } from "./api";

export const handleArticleUpvote = (article_id, setArticles, setErr) => {
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

export const handleArticleDownvote = (article_id, setArticles, setErr) => {
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

export const handleSingleArticleUpvote = (
  article_id,
  setSingleArticle,
  setErr
) => {
  setSingleArticle((currArticle) => {
    return { ...currArticle, votes: currArticle.votes + 1 };
  });

  patchArticleUpvote(article_id).catch(() => {
    setSingleArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes - 1 };
    });
    setErr("Something went wrong, please try again.");
  });
};

export const handleSingleArticleDownvote = (
  article_id,
  setSingleArticle,
  setErr
) => {
  setSingleArticle((currArticle) => {
    return { ...currArticle, votes: currArticle.votes - 1 };
  });

  patchArticleDownvote(article_id).catch(() => {
    setSingleArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes + 1 };
    });
    setErr("Something went wrong, please try again.");
  });
};
