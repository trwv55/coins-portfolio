import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchCrypto() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'CyIYvUxMv640YOuos1Z+69vVJkQuzXJymkfkSzN0wVM='
      }
    };

    const { data } = await axios.get('https://openapiv1.coinstats.app/coins?limit=20', options)

    return data.result
}

function useAllCrypto() {
  return useQuery({
    queryKey: ['crypto'], // Используем объект с ключом
    queryFn: fetchCrypto,  // Передаем функцию получения данных
  });
}

export default useAllCrypto;