import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topicsData) => {
      setTopics(topicsData);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <p>Loading topics...</p>
      ) : (
        <section className="section__topics">
          <h2 className="header__topic">Select a topic</h2>
          <ul className="list__topic">
            {topics.map((topic) => {
              return (
                <li key={topic.slug} className="li__topic">
                  <Link to={`/topics/${topic.slug}`} className="link__topic">
                    {topic.slug}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
};
