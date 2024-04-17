import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback( // создаем мемоизированный запрос в хуке
        async ( // пишем тело запроса
            url,
            method = 'GET',
            body = null,
            headers = { 'Content-type': 'application/json' }
        ) => {
            // запрос
            setLoading(true); // ф-ия загрузки 

            try { 
                const response = await fetch(url, { method, body, headers }); // получаем ответ от сервера

                if (!response.ok) {
                    throw new Error(
                        `Coulnd't fetch  ${url}, status: ${response.status}`, 
                    ); // обработка ошибки
                }

                const data = await response.json();

                setLoading(false);
                return data;
            } catch (e) {
                setLoading(false);
                setError(e.message);
                throw e;
            }
        }, []);

    const clearError = useCallback(() => setError(null, []));

    return { loading, request, error, clearError };
};
