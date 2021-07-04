import { useEffect, useState } from "react";

const useFetch = (
  url,
  config = {
    method: "GET",
  },
  initialState = ""
) => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { method } = config;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(url, { method });
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error);
        }
        const data = await res.json();
        setState(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method]);

  return { state, setState, error, loading };
};

export default useFetch;
