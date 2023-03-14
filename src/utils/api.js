import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-2yza.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
