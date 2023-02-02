import React, { FC } from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { IAccount } from "../../modules/types/accounts";
import Balance from "../Balance/Balance";
import Currency from "../Currency/Currency";
import ImageCard from "../ImageCard/ImageCard";

interface IAccountItem {
    account: IAccount
}

const AccountItem: FC<IAccountItem> = ({ account }) => {
    const tw = useTailwind();

    return (
        <View style={tw('flex-row items-center justify-between mb-7')}>
            <Currency currency={account.currency} />
            <Balance {...{ account }} />
            <ImageCard {...{ account }} />
        </View>
    );
};

export default AccountItem;
