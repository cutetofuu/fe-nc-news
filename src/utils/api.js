import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-2yza.onrender.com/api",
});

export const getArticles = (topic_name, sort_by, order) => {
  return newsApi
    .get("/articles", { params: { topic: topic_name, sort_by, order } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleUpvote = (article_id) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

export const patchArticleDownvote = (article_id) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: -1 });
};

export const postComment = (article_id, newComment, loggedInUser) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: loggedInUser,
      body: newComment,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
