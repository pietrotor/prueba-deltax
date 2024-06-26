import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useGetPokemons = () => {
  const [data, setData] = useState<any | null>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<any> = await axios({
          url: "https://pokeapi.co/api/v2/pokemon",
        });
        // setData(response.data.results);
        const finalResponse = await Promise.all(
          response.data.results.map(async (_: any, index: number) => {
            const response: AxiosResponse<any> = await axios({
              url: `https://pokeapi.co/api/v2/pokemon/${index + 1}`,
            });
            return response.data;
          })
        );
        console.log("--d ata--", finalResponse);
        setData(finalResponse);
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
export { useGetPokemons };
