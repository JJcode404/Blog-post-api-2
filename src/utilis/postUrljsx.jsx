import { useState, useEffect } from "react";

const usePostURL = (url = "https://fakestoreapi.com/products") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(url);
    if (!url) {
      setError("Url required");
      setLoading(false);
      return;
    }
    fetch(`${url}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

export { usePostURL };
