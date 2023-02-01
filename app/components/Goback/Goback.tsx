import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from 'tailwind-rn';

interface IGoBack {
    style?: string;
}

const Goback: FC<IGoBack> = ({ style }) => {
    const { goBack } = useNavigation();
    const tw = useTailwind();

    const handleNavigate = () => {
        goBack();
    }
    return (

        <View style={tw(`${style}`)}>
            <TouchableOpacity
                onPress={handleNavigate}
            >
                <Entypo name='chevron-small-left' size={28} style={tw('text-gray-800')} />
            </TouchableOpacity>
        </View>
    );
};

export default Goback;
