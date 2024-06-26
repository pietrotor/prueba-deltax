import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useGetTypes = () => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<any> = await axios({
          url: "https://pokeapi.co/api/v2/type",
        });
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};
export { useGetTypes };
