import { useState } from "react";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();

  try {
    const fetchingData = async () => {
      setIsLoading(true);
      const fetchData = await fetch(url);
      const res = await fetchData.json();
      setData(res);
      setIsLoading(false);
    };
    fetchingData();
  } catch (error) {
    setError(`error occuring : ${error}`);
    setIsLoading(false);
  }
  return { data, isLoading, error };
};
