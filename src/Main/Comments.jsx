export const Comments = ({ comment: { body, author, created_at, votes } }) => {
  const date = new Date(created_at);

  return (
    <>
      <section className="section__comment">
        <p>{body}</p>
        <div className="comment__author_date_votes">
          <span>
            {author}, {date.toLocaleDateString()}
          </span>
          <span>
            <i className="fa-regular fa-thumbs-up"></i> {votes}
          </span>
        </div>
      </section>
    </>
  );
};
