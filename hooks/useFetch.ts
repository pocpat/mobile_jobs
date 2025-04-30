import { useState, useEffect } from 'react';
import axios from 'axios';

// ✅ Using Expo's native .env support
const apiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;
type FetchOptions = {
  endpoint: string;
  params?: Record<string, string>;
};

export const useFetch = ({ endpoint, params }: FetchOptions) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`https://jsearch.p.rapidapi.com/${endpoint}`, {
          headers: {
            'x-rapidapi-key': apiKey || '',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
          },
          params,
        });

        setData(response.data.data || []);
      } catch (err: any) {
        setError(err);
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, JSON.stringify(params)]); // Update if endpoint or params change

  return { data, isLoading, error };
};
