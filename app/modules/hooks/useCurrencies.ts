import { useEffect, useState } from "react"
import { Alert } from "react-native";
import { ICurrency } from '../types/currencies';
import { getApiData } from '../api'


export const useCurrencies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currencies, setCurrencies] = useState<ICurrency[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await getApiData('&base_currency=RUB');

                setCurrencies([
                    {
                        name: 'USD',
                        value: (1 / response.data.USD.value).toFixed(2)
                    },
                    {
                        name: 'EUR',
                        value: (1 / response.data.EUR.value).toFixed(2)
                    },
                    {
                        name: 'GBP',
                        value: (1 / response.data.GBP.value).toFixed(2)
                    }
                ]);
            } catch (error: any) {
                Alert.alert('Error fetch currencies: ', error.message);
            } finally {
                setIsLoading(false)
            }
        }

        fetchData();

    }, []);

    return { currencies, isLoading }
}