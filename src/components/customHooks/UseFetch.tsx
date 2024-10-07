/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";



interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("network response is not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
}

const ApiFetch:React.FC= ()=> {
  const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const [index, setIndex] = useState(0);

  const {
    loading,
    data: post,
    error,
  } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  );

  const incrementIndex = () => {
    setIndex((i) => (i === postIds.length - 1 ? i : i + 1));
  };

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </>
    );
  }

  return (
    <div className="App">
      {post &&(
        <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      </>
      )}
      {error && <p>{error}</p>}
      {index === postIds.length - 1 ? (
        <p>No more posts existss ....</p>
      ) : (
        <button onClick={incrementIndex}>Next Post</button>
      )}
    </div>
  );
}

export default ApiFetch; 