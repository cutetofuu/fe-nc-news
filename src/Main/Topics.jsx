import { useEffect, useState } from "react";
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
        <>
          <h2>Select a topic</h2>
          <ul>
            {topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <p>{topic.slug}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
};
