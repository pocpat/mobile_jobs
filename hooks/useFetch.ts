import { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;

type FetchOptions = {
  endpoint: string;
  query?: Record<string, string | number | boolean>;
};

export const useFetch = ({ endpoint, query }: FetchOptions) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://jsearch.p.rapidapi.com/${endpoint}`, {
        headers: {
          'x-rapidapi-key': apiKey || '',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com',
        },
        params: { ...query },
      });

      setData(response.data.data || []);
    } catch (err: any) {
      setError(err);
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, JSON.stringify(query)]);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
