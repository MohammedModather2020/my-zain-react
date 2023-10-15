import { useEffect, useState } from 'react';
import ApiConfig from '../api/ApiConfig';

export default function useData(token, url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    ApiConfig.get(`${url}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setData(res?.data);
    });
  }, [token, url]);
  return { data };
}
