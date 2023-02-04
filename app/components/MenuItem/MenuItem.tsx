import React, { FC } from "react";
import { View, Text, Pressable, Linking } from "react-native";
import { IMoreItem } from "../../modules/types/more";
import { useTailwind } from "tailwind-rn";
import { BOX_SHADOW } from "../../styles";
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../styles';

const MenuItem: FC<{ item: IMoreItem }> = ({ item }) => {
    const tw = useTailwind();

    const handleLink = () => {
        Linking.openURL(item.link);
    }

    return (
        <Pressable
            style={{
                ...tw('mt-4 flex-row bg-white p-4 rounded-2xl justify-between'),
                ...BOX_SHADOW
            }}
            onPress={handleLink}
        >
            <View style={tw('w-10/12')}>
                <Text style={tw('text-xl text-gray-800 font-bold')}>{item.title}</Text>
                <Text style={{ ...tw('mt-1 text-gray-800 opacity-90'), fontSize: 13 }}>{item.description}</Text>
            </View>
            <View style={tw('rounded-full bg-blue-500 w-9 h-9 items-center justify-center')}>
                <MaterialIcons name={item.iconName} size={22} color={COLORS.white} />
            </View>
        </Pressable >
    );
};

export default MenuItem;
