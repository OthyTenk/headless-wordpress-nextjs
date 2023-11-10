"use client";

import { useEffect, useState } from "react";

const baseUrl = `http://localhost/wordpress`;

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const req = await fetch(`${baseUrl}${url}`, {
          cache: "no-cache",
        });
        const categories = await req.json();
        categories && setData(categories);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
