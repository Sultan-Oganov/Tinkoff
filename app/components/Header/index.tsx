import React, { FC } from "react";
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { useTailwind } from 'tailwind-rn';
import { useProfile } from "../../modules/hooks/useProfile";
import Padding from "../ui/Padding";
import Avatar from "../ui/Avatar";
import Loader from "../ui/Loader";

const Header: FC = () => {
    const tw = useTailwind();
    const { isLoading, name } = useProfile();
    const { navigate } = useNavigation();

    const handleNavigate = () => {
        navigate('Profile');
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <Padding style={tw('flex-row items-center')}>
            <Avatar name={name} />
            <TouchableOpacity
                onPress={handleNavigate}
                style={tw('flex-row items-end')}
            >
                <Text style={tw('text-2xl text-gray-800 font-bold ')}>{name}</Text>
                <Entypo name='chevron-small-right' size={28} style={tw('text-gray-800')} />
            </TouchableOpacity>
        </Padding>
    );
};

export default Header;
