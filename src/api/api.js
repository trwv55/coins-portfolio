// Поиск монеты "Добавить монету" для дальнейшей настройки актива в мод окне Add new asset
export async function fetchNewName(coinName) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'CyIYvUxMv640YOuos1Z+69vVJkQuzXJymkfkSzN0wVM=',
        },
    };

    return await fetch(`https://openapiv1.coinstats.app/coins/${coinName}`, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error: Coin not found');
            }
            return response.json();
        })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.error('Network response was not ok', err);
            throw err;
        });
}
