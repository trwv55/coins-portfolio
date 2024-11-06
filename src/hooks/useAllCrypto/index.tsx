import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

async function fetchCrypto(page: number) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'CyIYvUxMv640YOuos1Z+69vVJkQuzXJymkfkSzN0wVM='
      }
    };

    let URL_ALL_CRYPTO = `https://openapiv1.coinstats.app/coins?page=${page}&limit=20`

    const { data } = await axios.get(URL_ALL_CRYPTO, options)

    return data;
}

function useAllCrypto(page: number) {
  return useQuery({
    queryKey: ['crypto', page], // Используем объект с ключом
    queryFn: () =>  fetchCrypto(page), // Передаем функцию получения данных
    placeholderData: keepPreviousData,
  });
}

export default useAllCrypto;