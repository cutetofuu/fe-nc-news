import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleArticleCard } from "./SingleArticleCard";
import { Comments } from "./Comments";
import { getArticleById } from "../utils/api";

export const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((singleArticleData) => {
      setSingleArticle(singleArticleData);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <main>
      {isLoading ? (
        <p>Loading article...</p>
      ) : (
        <>
          <SingleArticleCard singleArticle={singleArticle} />
          <Comments />
        </>
      )}
    </main>
  );
};
