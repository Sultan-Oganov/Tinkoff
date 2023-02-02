import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAccounts } from "../../modules/hooks/useAccounts";
import { IOtherPaymentsItem } from '../../modules/types/otherPayments';
import { BOX_SHADOW } from "../../styles";
import { handleTransfer } from "../../utils/payments/handleTransfer";
import Icon from "./Icon";

const CASH_CARD_NUMBER = '4917 2154 8691 5737';

const OtherPaymentsItem: FC<{ item: IOtherPaymentsItem }> = ({ item }) => {
    const { accounts } = useAccounts();
    const tw = useTailwind();

    return (
        <Pressable
            onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}
            style={{
                ...tw('ml-4 rounded-xl p-2 w-24 h-24 bg-white '),
                ...BOX_SHADOW
            }}>
            <Icon iconName={item.iconName} />
            <Text style={tw('mt-2 text-xs')}>
                {item.title}
            </Text>
        </Pressable>
    );
};

export default OtherPaymentsItem;
