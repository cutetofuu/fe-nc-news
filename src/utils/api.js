import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-2yza.onrender.com/api",
});

export const getArticles = (article_id) => {
  let path = `/articles`;
  if (article_id) {
    path += `/${article_id}`;
  }

  return newsApi.get(path).then(({ data }) => {
    if (data.hasOwnProperty("articles")) {
      return data.articles;
    }
    return data.article;
  });
};
