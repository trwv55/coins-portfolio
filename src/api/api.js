export async function fetchNewName(coinName) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'CyIYvUxMv640YOuos1Z+69vVJkQuzXJymkfkSzN0wVM=',
        },
    };

    try {
        const responce = await fetch(`https://openapiv1.coinstats.app/coins/${coinName}`, options);
        const data = await responce.json();
        console.log('data', data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
