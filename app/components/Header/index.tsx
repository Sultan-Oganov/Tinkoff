import React, { FC } from "react";
import Padding from "../ui/Padding";
import { useTailwind } from 'tailwind-rn';
import Avatar from "../ui/Avatar";
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { useProfile } from "../../modules/hooks/useProfile";
import Loader from "../ui/Loader";
import Button from "../ui/Button";
import { useAuth } from '../../modules/hooks/useAuth';

const Header: FC = () => {
    const tw = useTailwind();
    const { isLoading, name } = useProfile();
    const { navigate } = useNavigation();
    const { logout } = useAuth();
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
            <Button title="Logout" onPress={logout} />
        </Padding>
    );
};

export default Header;
