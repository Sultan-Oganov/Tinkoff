import React, { FC } from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { IAccount } from "../../modules/types/accounts";

interface IBalance {
    account: IAccount
}

const Balance: FC<IBalance> = ({ account: { balance, currency, name } }) => {
    const tw = useTailwind();

    return (
        <View style={tw('w-8/12')}>
            <Text style={{ fontSize: 15 }}>{name}</Text>
            <Text style={{
                ...tw('font-bold'),
                fontSize: 15,
                marginTop: 2
            }}>{
                    Intl.NumberFormat(undefined, {
                        currency,
                        style: 'currency',
                    }).format(balance)
                }</Text>
        </View>
    );
};

export default Balance;
