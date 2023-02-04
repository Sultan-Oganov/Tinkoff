const API_KEY = 'dpwteZ7AR62uvGqCXBHEI7qRgU11G93gXaVkGBGM';
const url = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`;

export const getApiData = async (endPoint: string, method: string = 'GET', data?: any) => {
    const request = await fetch(`${url}${endPoint}`,
        {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : null
        }
    );
    return await request.json();
}