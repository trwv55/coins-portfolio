import axios, { AxiosRequestConfig } from 'axios';
import { TCoinData } from '../types/types';

// Поиск монеты "Добавить монету" для дальнейшей настройки актива в мод окне Add new asset
// export async function fetchNewName(coinName: string): Promise<TCoinData> {
//     const options: AxiosRequestConfig = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             'X-API-KEY': 'CyIYvUxMv640YOuos1Z+69vVJkQuzXJymkfkSzN0wVM=',
//         },
//     };

//     try {
//         const response = await axios.get<TCoinData>(
//             `https://openapiv1.coinstats.app/coins/${coinName}`,
//             options,
//         );

//         if (!response.data) {
//             throw new Error('Error: Coin not found');
//         }

//         return response.data;
//     } catch (error) {
//         console.error('Network response was not ok', error);
//         throw error;
//     }
// }
