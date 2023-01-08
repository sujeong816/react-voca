import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    /** 의존성 배열: [] 값이 변경됐을 때만 useEffect 실행 */
    fetch(url)
      .then((res) => {
        /** API */
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}
