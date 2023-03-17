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
          <h2>Select a topic</h2>
          <ul>
            {topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <Link to={`/topics/${topic.slug}`}>
                    <button className="button__topic" value={topic.slug}>
                      {topic.slug}
                    </button>
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
