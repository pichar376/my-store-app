import React, { useState, useEffect } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDataApi = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("an error occurred in the request" + res.status);
        }
        const response = await res.json();

        setData(response);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getDataApi();
  }, [url]);

  return { data, loading, error };
};
