export const ArticleCard = ({
  article_img_url,
  title,
  author,
  votes,
  comment_count,
  topic,
  created_at,
}) => {
  return (
    <section className="section__article">
      <img src={article_img_url} alt="article image" className="img__article" />
      <h2 className="article__title">{title}</h2>
      <p>By: {author}</p>
      <span>
        <i class="fa-regular fa-thumbs-up"></i> {votes}
      </span>
      <span>
        <i class="fa-regular fa-comment"></i> {comment_count}
      </span>
      <div className="article__card__footer">
        <p>{topic}</p>
        <p>{created_at}</p>
      </div>
    </section>
  );
};
