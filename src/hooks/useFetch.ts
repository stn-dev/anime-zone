import type {
  Anime,
  CharacterFull,
  JikanResponse,
  Recommendation,
} from "@tutkli/jikan-ts";
import { useEffect, useState } from "react";

export const useFetch = (
  url: string,
  depedencie: number | string | boolean
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<
    Anime[] | CharacterFull[] | Recommendation[]
  >();
  const [pageLimit, setPageLimit] = useState(1);
  const URL = import.meta.env.VITE_BASE_URL;
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    try {
      const fetchingData = async () => {
        setIsLoading(true);
        const fetchData = await fetch(`${URL}${url}`, { signal });
        const res: JikanResponse<Anime[] | CharacterFull[] | Recommendation[]> =
          await fetchData.json();
        setData(res.data);
        setPageLimit(Number(res.pagination?.last_visible_page));
        setIsLoading(false);
      };
      fetchingData();
    } catch (error) {
      setError(`error occuring : ${error}`);
      setIsLoading(false);
    }

    return () => controller.abort();
  }, [depedencie]);

  return { data, isLoading, error, pageLimit };
};
