import React, { FC } from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { useCurrencies } from '../../modules/hooks/useCurrencies';
import { BOX_SHADOW } from "../../styles";
import Loader from "../ui/Loader";

const Currencies: FC = () => {
    const tw = useTailwind();
    const { currencies, isLoading } = useCurrencies();

    return (
        <View style={{
            ...tw('mt-5 flex-row rounded-2xl bg-white py-3 justify-center'),
            ...BOX_SHADOW
        }}>
            {
                isLoading ? <Loader /> :
                    currencies.map(cur => (
                        <View style={{
                            ...tw('text-xs w-1/3 flex-row justify-center'),
                            ...BOX_SHADOW
                        }}>
                            <Text style={tw('text-gray-400 mr-1')}>{cur.name}</Text>
                            <Text style={tw('text-gray-800')}>{cur.value}</Text>
                        </View>
                    ))
            }
        </View>
    );
};

export default Currencies;
