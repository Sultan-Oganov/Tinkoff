import { View, Text } from "react-native";
import React, { FC } from "react";
import { IFooterItem } from "../../modules/types/footer";
import { AntDesign } from '@expo/vector-icons';
import { useTailwind } from "tailwind-rn";
import { COLORS } from "../../styles";

interface IIcon extends Pick<IFooterItem, 'iconName'> { }

const Icon: FC<IIcon> = ({ iconName }) => {
    const tw = useTailwind();

    return (
        <View style={tw('rounded-full bg-blue-500 w-8 h-8 items-center justify-center')}>
            <AntDesign name={iconName} size={19} color={COLORS.white} />
        </View>
    );
};

export default Icon;
