import React, { FC } from "react";
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useTailwind } from "tailwind-rn";
import { TypeCurrency } from "../../modules/types/accounts";
import { COLORS } from '../../styles';

interface ICurrency {
    currency: TypeCurrency
}

const Currency: FC<ICurrency> = ({ currency }) => {
    const tw = useTailwind();

    return (
        <View style={tw('rounded-full bg-blue-500 w-9 h-9 items-center justify-center')}>
            <View style={{
                ...tw('rounded-full  w-5 h-5 items-center justify-center'),
                backgroundColor: COLORS.grayLight
            }}>
                <FontAwesome
                    color={COLORS.primary}
                    size={15}
                    name={currency === 'RUB' ? 'ruble' : 'usd'}
                />

            </View>

        </View>
    );
};

export default Currency;
