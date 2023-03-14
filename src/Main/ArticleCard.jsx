export const ArticleCard = ({
  article_img_url,
  title,
  author,
  votes,
  comment_count,
  topic,
  created_at,
}) => {
  const date = new Date(created_at);
  return (
    <section className="section__article">
      <img src={article_img_url} alt={title} className="article__img" />
      <h2 className="article__title">{title}</h2>
      <p className="article__author_and_date">
        By {author} on {date.toLocaleDateString()}
      </p>
      <div className="article__card__footer">
        <span>#{topic}</span>
        <div className="article__icons">
          <span>
            <i className="fa-regular fa-thumbs-up"></i> {votes}
          </span>
          <span>
            <i className="fa-regular fa-comment"></i> {comment_count}
          </span>
        </div>
      </div>
    </section>
  );
};
